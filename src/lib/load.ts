import { getEmDashCollection, getEmDashEntry } from "emdash";
import type { Lang } from "../i18n";

type Hint = any;
const byOrder = (a: any, b: any) => (a.data.sort_order ?? 0) - (b.data.sort_order ?? 0);

// Pages taken off the site. They stay unreachable even if old entries remain in the CMS.
const REMOVED = new Set(["videos", "beauty", "story"]);

export const TILE_SLUGS = ["detox", "massage", "biocleanse"] as const;

export async function loadHome(lang: Lang) {
	const [homeRes, howRes, testiRes, ...tileRes] = await Promise.all([
		getEmDashEntry("pages", "home", { locale: lang }),
		getEmDashEntry("pages", "how-it-works", { locale: lang }),
		getEmDashCollection("testimonials", { locale: lang, limit: 50 }),
		...TILE_SLUGS.map((s) => getEmDashEntry("pages", s, { locale: lang })),
	]);
	const hints: Hint[] = [homeRes, howRes, testiRes, ...tileRes].map((r: any) => r.cacheHint);
	if (!homeRes.entry) return { home: null, hints };

	const tiles = tileRes
		.map((r: any, i) =>
			r.entry
				? { slug: TILE_SLUGS[i], title: r.entry.data.title, text: r.entry.data.hero_text, image: r.entry.data.hero_image }
				: null,
		)
		.filter((x): x is NonNullable<typeof x> => x !== null);

	return {
		home: homeRes.entry as any,
		tiles,
		steps: (((howRes.entry?.data as any)?.highlights ?? []) as any[]).slice(0, 4),
		testimonials: [...((testiRes as any).entries ?? [])].sort(byOrder),
		hints,
	};
}

export async function loadPage(lang: Lang, slug: string) {
	const pageRes: any = await getEmDashEntry("pages", slug, { locale: lang });
	const hints: Hint[] = [pageRes.cacheHint];
	if (pageRes.error) return { error: true as const, hints };
	const page = pageRes.entry;
	if (!page || slug === "home" || REMOVED.has(slug)) return { page: null, hints };

	const tpl: string = page.data.template;
	const list = async (collection: string, where?: Record<string, string>) => {
		const r: any = await getEmDashCollection(collection as any, { locale: lang, limit: 50, ...(where ? { where } : {}) });
		hints.push(r.cacheHint);
		return [...(r.entries ?? [])].sort(byOrder);
	};

	const treatments = tpl === "treatments" && ["detox", "massage"].includes(slug) ? await list("treatments", { category: slug }) : [];
	const testimonials = tpl === "info" ? await list("testimonials") : [];

	return { page, treatments, testimonials, hints };
}
