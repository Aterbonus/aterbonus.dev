export default defineNuxtConfig({
	compatibilityDate: '2026-07-19',
	experimental: { asyncContext: true },
	devtools: {
		enabled: true,
	},
	modules: [
		'@nuxt/ui',
		'@vueuse/nuxt',
		'@pinia/nuxt',
		'@pinia/colada-nuxt',
		'@nuxtjs/turnstile',
	],
	css: [
		'~/assets/css/main.css',
	],
	nitro: {
		preset: 'cloudflare-module',
	},
	runtimeConfig: {
		public: {
			turnstile: {
				siteKey: '',
			},
		},
		turnstile: {
			secretKey: '',
		},
		betterAuth: {
			secret: '',
			baseUrl: '',
		},
	},
})
