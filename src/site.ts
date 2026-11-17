/**
 * Business details used across the site. Edit these in one place.
 */
export const SITE = {
	name: "Clenz",
	// The one address search engines should treat as the real one.
	origin: "https://clenz.org",
	// Logo shown at the top left. Uploaded to the live site's media library.
	logo: "/_emdash/api/media/file/01M5YYGVKAVKSN8H21S72HS75A.01M5YYGWQ4N40A90ADPB8QA81H.png",
	// Image shown when a page is shared on Facebook, WhatsApp, LinkedIn, X and so on (1000 x 626).
	shareImage: "/_emdash/api/media/file/01M5Z42AV7XB9Z6FFH3X642W3E.01M5Z42B778FA48M3ZS0G346WZ.jpg",
	// Light version of the logo for the dark footer.
	footerLogo: "/_emdash/api/media/file/01M5YZ8BKPRJGRFC1XVBBH9KBY.01M5YZ8CNZT0R9R2AWPF5GFZ9M.png",
	bookingUrl:
		"https://www.fresha.com/a/clenz-detox-beauty-massage-roermond-sint-christoffelstraat-16-v2p7f3ce/booking?menu=true&pId=676136",
	// TODO: confirm this address. The old site only showed a temporary hosting address.
	email: "info@clenz.org",
	phones: [
		{ name: "Anja", display: "+31 6 28 77 09 46", tel: "+31628770946" },
		{ name: "Arthur", display: "+31 6 28 77 09 47", tel: "+31628770947" },
	],
	address: {
		street: "Sint Christoffelstraat 16",
		postcode: "6041 JS",
		city: "Roermond",
		country: { en: "The Netherlands", nl: "Nederland", de: "Niederlande" },
	},
	mapEmbed:
		"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1250.2317299476006!2d5.986728971243912!3d51.192111279432716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b55ce492a599%3A0xca534041f364481a!2zQ2xlbnog4oCiIEJlYXV0eSDigKIgRGV0b3gg4oCiIE1hc3NhZ2U!5e0!3m2!1sen!2sid!4v1706174025116!5m2!1sen!2sid",
	directionsUrl:
		"https://www.google.com/maps/search/?api=1&query=Clenz%20Sint%20Christoffelstraat%2016%20Roermond",
	social: {
		facebook: "https://www.facebook.com/profile.php?id=100063719103805",
		instagram: "https://instagram.com/clenz.europa",
	},
} as const;
