import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { defineConfig, fontProviders } from "astro/config";
import emdash from "emdash/astro";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	site: "https://clenz.org",
	// English lives at the root (/detox), Dutch and German under /nl and /de.
	i18n: {
		defaultLocale: "en",
		locales: ["en", "nl", "de"],
		routing: { prefixDefaultLocale: false },
	},
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto", coalesce: true }),
			storage: r2({ binding: "MEDIA" }),
		}),
	],
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Outfit",
			cssVariable: "--font-sans",
			weights: [300, 400, 500, 600],
			fallbacks: ["sans-serif"],
		},
	],
	devToolbar: { enabled: false },
});
