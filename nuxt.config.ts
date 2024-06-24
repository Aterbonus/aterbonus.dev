export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: ['@unocss/nuxt', '@vueuse/nuxt', '@nuxthub/core'],
	unocss: {
		preflight: true
	}
})
