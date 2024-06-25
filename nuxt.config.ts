export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxthub/core', '@nuxtjs/seo'],
	site: {
		url: 'https://aterbonus.dev',
		name: 'Aterbonus\' Home',
		description: 'Aterbonus personal site',
		defaultLocale: 'en' // not needed if you have @nuxtjs/i18n installed
	},
	ogImage: {
		enabled: false
	},
	unocss: {
		preflight: true
	}
})
