export default defineNuxtConfig({
	compatibilityDate: '2026-07-19',
	future: {
		compatibilityVersion: 5,
	},
	features: {
		inlineStyles: false,
	},
	devtools: {
		enabled: true,
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxtjs/seo',
		'@pinia/nuxt',
	],
	site: {
		url: 'https://aterbonus.dev',
		name: 'Aterbonus\' Home',
		description: 'Gustavo Alfredo Marín Sáez, un desarrollador más.',
		defaultLocale: 'es',
	},
	ogImage: {
		enabled: false,
	},
	schemaOrg: {
		identity: {
			type: 'Person',
			name: 'Gustavo Alfredo Marín Sáez',
			url: 'https://aterbonus.dev',
			sameAs: ['https://github.com/aterbonus', 'https://www.linkedin.com/in/gustavo-marin-saez/'],
		},
	},
	css: [
		'~/assets/css/main.css',
	],
})
