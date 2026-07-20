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
	css: [
		'~/assets/css/main.css',
	],
})
