export const LOCALES = ["en", "nl", "de"] as const;
export type Lang = (typeof LOCALES)[number];
export const DEFAULT_LANG: Lang = "en";

export const LANG_NAMES: Record<Lang, string> = {
	en: "English",
	nl: "Nederlands",
	de: "Deutsch",
};

export function isLang(value: unknown): value is Lang {
	return typeof value === "string" && (LOCALES as readonly string[]).includes(value);
}

/** Build a path for a page slug in a language. English has no prefix. */
export function pathFor(lang: Lang, slug = ""): string {
	const clean = slug === "home" ? "" : slug;
	const prefix = lang === DEFAULT_LANG ? "" : `/${lang}`;
	return `${prefix}/${clean}`.replace(/\/+$/, "") || "/";
}

/** Main navigation, in order. Labels come from the dictionary below. */
export const NAV = [
	"detox",
	"massage",
	"biocleanse",
	"how-it-works",
	"inspiration",
	"contact",
] as const;

type Dict = {
	nav: Record<(typeof NAV)[number] | "home", string>;
	[key: string]: unknown;
};

const en = {
	nav: {
		home: "Home",
		detox: "Detox",
		massage: "Massage",
		biocleanse: "Biocleanse",
		"how-it-works": "How it works",
		inspiration: "Inspiration",
		contact: "Contact",
	},
	tagline: "Detox and massage in Roermond",
	book: "Book now",
	bookOnline: "Book online",
	moments: {
		headline: "Slow hands,",
		headlineItalic: "Effective Detox.",
		intro: "Slow, unhurried massage in Roermond. Nine moments, one long exhale.",
	} as { headline: string; headlineItalic: string; intro: string } | null,
	momentsDetox: {
		headline: "Warm water,",
		headlineItalic: "Gentle Cleanse.",
		intro: "Ionic foot bath, frequencies and infrared heat in Roermond. Three moments, one fresh start.",
	} as { headline: string; headlineItalic: string; intro: string } | null,
	menu: "Menu",
	close: "Close",
	language: "Language",
	skip: "Skip to content",
	explore: "See treatments",
	servicesTitle: "Choose your treatment",
	servicesText: "Three ways to feel better, all under one roof.",
	treatmentsTitle: "Treatments and prices",
	finderTitle: "Not sure where to start?",
	finderText: "Pick what you need most and we'll suggest a treatment.",
	finderOptions: {
		detox: "More energy and better sleep",
		massage: "Less tension and stress",
		biocleanse: "A footbath for my practice or home",
	},
	finderResult: "We suggest",
	finderView: "View treatment",
	foundersCta: "See our treatments",
	stepsTitle: "How a session works",
	stepsMore: "More about how it works",
	testimonialsTitle: "What our clients say",
	prev: "Previous",
	next: "Next",
	faqTitle: "Questions and answers",
	visitTitle: "Visit us",
	hoursTitle: "Opening hours",
	hoursDays: "Wednesday to Saturday",
	hoursTime: "10:00 to 18:00",
	hoursSunday: "Closed on Sunday",
	walkIn: "Walk in during opening hours, no appointment needed.",
	addressTitle: "Address",
	callTitle: "Call us",
	emailTitle: "Email",
	directions: "Get directions",
	call: "Call {name}",
	enquire: "Ask about the BioCleanse",
	galleryOpen: "Open photo",
	privacy: "Privacy policy",
	follow: "Follow us",
	rights: "All rights reserved.",
	notFoundTitle: "Page not found",
	notFoundText: "This page doesn't exist or has moved.",
	backHome: "Back to the homepage",
	disclaimer:
		"The information on this site is for general information only and does not replace medical advice.",
};

const nl: typeof en = {
	nav: {
		home: "Home",
		detox: "Detox",
		massage: "Massage",
		biocleanse: "Biocleanse",
		"how-it-works": "Hoe het werkt",
		inspiration: "Inspiratie",
		contact: "Contact",
	},
	tagline: "Detox en massage in Roermond",
	moments: {
		headline: "Rustige handen,",
		headlineItalic: "Effectieve detox.",
		intro: "Rustige, ongehaaste massage in Roermond. Negen momenten, één lange uitademing.",
	},
	momentsDetox: {
		headline: "Warm water,",
		headlineItalic: "Zachte reiniging.",
		intro: "Ionisch voetenbad, frequenties en infraroodwarmte in Roermond. Drie momenten, één frisse start.",
	},
	book: "Boek nu",
	bookOnline: "Online boeken",
	menu: "Menu",
	close: "Sluiten",
	language: "Taal",
	skip: "Direct naar inhoud",
	explore: "Bekijk behandelingen",
	servicesTitle: "Kies je behandeling",
	servicesText: "Drie manieren om je beter te voelen, onder één dak.",
	treatmentsTitle: "Behandelingen en prijzen",
	finderTitle: "Weet je niet waar je moet beginnen?",
	finderText: "Kies wat je het meest nodig hebt en wij stellen een behandeling voor.",
	finderOptions: {
		detox: "Meer energie en beter slapen",
		massage: "Minder spanning en stress",
		biocleanse: "Een voetenbad voor mijn praktijk of thuis",
	},
	finderResult: "Wij raden aan",
	finderView: "Bekijk behandeling",
	foundersCta: "Bekijk onze behandelingen",
	stepsTitle: "Zo verloopt een sessie",
	stepsMore: "Meer over hoe het werkt",
	testimonialsTitle: "Wat onze klanten zeggen",
	prev: "Vorige",
	next: "Volgende",
	faqTitle: "Vragen en antwoorden",
	visitTitle: "Kom langs",
	hoursTitle: "Openingstijden",
	hoursDays: "Woensdag tot en met zaterdag",
	hoursTime: "10:00 tot 18:00",
	hoursSunday: "Zondag gesloten",
	walkIn: "Loop binnen tijdens de openingstijden, zonder afspraak.",
	addressTitle: "Adres",
	callTitle: "Bel ons",
	emailTitle: "E-mail",
	directions: "Routebeschrijving",
	call: "Bel {name}",
	enquire: "Vraag naar de BioCleanse",
	galleryOpen: "Foto openen",
	privacy: "Privacybeleid",
	follow: "Volg ons",
	rights: "Alle rechten voorbehouden.",
	notFoundTitle: "Pagina niet gevonden",
	notFoundText: "Deze pagina bestaat niet of is verplaatst.",
	backHome: "Terug naar de homepage",
	disclaimer:
		"De informatie op deze site is algemeen van aard en vervangt geen medisch advies.",
};

const de: typeof en = {
	nav: {
		home: "Startseite",
		detox: "Detox",
		massage: "Massage",
		biocleanse: "Biocleanse",
		"how-it-works": "So funktioniert es",
		inspiration: "Inspiration",
		contact: "Kontakt",
	},
	tagline: "Detox und Massage in Roermond",
	moments: {
		headline: "Ruhige Hände,",
		headlineItalic: "Wirksamer Detox.",
		intro: "Ruhige, entspannte Massage in Roermond. Neun Momente, ein langes Ausatmen.",
	},
	momentsDetox: {
		headline: "Warmes Wasser,",
		headlineItalic: "Sanfte Reinigung.",
		intro: "Ionen-Fußbad, Frequenzen und Infrarotwärme in Roermond. Drei Momente, ein frischer Neubeginn.",
	},
	book: "Jetzt buchen",
	bookOnline: "Online buchen",
	menu: "Menü",
	close: "Schließen",
	language: "Sprache",
	skip: "Zum Inhalt springen",
	explore: "Behandlungen ansehen",
	servicesTitle: "Wählen Sie Ihre Behandlung",
	servicesText: "Drei Wege, sich besser zu fühlen, unter einem Dach.",
	treatmentsTitle: "Behandlungen und Preise",
	finderTitle: "Sie wissen nicht, wo Sie anfangen sollen?",
	finderText: "Wählen Sie, was Sie am meisten brauchen, und wir schlagen eine Behandlung vor.",
	finderOptions: {
		detox: "Mehr Energie und besserer Schlaf",
		massage: "Weniger Verspannung und Stress",
		biocleanse: "Ein Fußbad für meine Praxis oder zu Hause",
	},
	finderResult: "Unsere Empfehlung",
	finderView: "Behandlung ansehen",
	foundersCta: "Unsere Behandlungen ansehen",
	stepsTitle: "So läuft eine Sitzung ab",
	stepsMore: "Mehr darüber, wie es funktioniert",
	testimonialsTitle: "Was unsere Kunden sagen",
	prev: "Zurück",
	next: "Weiter",
	faqTitle: "Fragen und Antworten",
	visitTitle: "Besuchen Sie uns",
	hoursTitle: "Öffnungszeiten",
	hoursDays: "Mittwoch bis Samstag",
	hoursTime: "10:00 bis 18:00 Uhr",
	hoursSunday: "Sonntag geschlossen",
	walkIn: "Während der Öffnungszeiten ohne Termin vorbeikommen.",
	addressTitle: "Adresse",
	callTitle: "Rufen Sie uns an",
	emailTitle: "E-Mail",
	directions: "Route planen",
	call: "{name} anrufen",
	enquire: "Nach dem BioCleanse fragen",
	galleryOpen: "Foto öffnen",
	privacy: "Datenschutzerklärung",
	follow: "Folgen Sie uns",
	rights: "Alle Rechte vorbehalten.",
	notFoundTitle: "Seite nicht gefunden",
	notFoundText: "Diese Seite existiert nicht oder wurde verschoben.",
	backHome: "Zur Startseite",
	disclaimer:
		"Die Informationen auf dieser Website dienen nur der allgemeinen Information und ersetzen keine ärztliche Beratung.",
};

const DICTS = { en, nl, de } satisfies Record<Lang, Dict>;

export function t(lang: Lang) {
	return DICTS[lang];
}
