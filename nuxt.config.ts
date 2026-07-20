export default defineNuxtConfig({
	compatibilityDate: '2026-07-19',
	future: {
		compatibilityVersion: 5,
	},
	devtools: {
		enabled: true,
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@pinia/nuxt',
	],
	css: [
		'~/assets/css/main.css',
	],
})
