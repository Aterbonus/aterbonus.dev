export default defineNuxtConfig({
	compatibilityDate: '2026-07-19',
	devtools: {
		enabled: true,
	},
	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
	],
	css: [
		'~/assets/css/main.css',
	],
	nitro: {
		preset: 'cloudflare-module',
	},
})
