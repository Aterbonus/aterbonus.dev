export default defineNuxtConfig({
	compatibilityDate: '2026-07-19',
	future: {
		compatibilityVersion: 5,
	},
	experimental: { nitroAutoImports: true },
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
