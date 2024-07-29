export default defineNuxtConfig({
	future: {
		compatibilityVersion: 4
	},
	modules: [
		'@unocss/nuxt',
		'@vueuse/nuxt',
		'@nuxthub/core',
		'@nuxtjs/seo',
		'shadcn-nuxt',
		'nuxt-auth-utils',
		'@vee-validate/nuxt',
		'@nuxtjs/turnstile',
		'@pinia/nuxt'
	],
	site: {
		url: 'https://aterbonus.dev',
		name: 'Aterbonus\' Home',
		description: 'Gustavo Alfredo Marín Sáez, un desarrollador más.',
		defaultLocale: 'es'
	},
	routeRules: {
		'/admin/**': { robots: false }
	},
	ogImage: {
		enabled: false
	},
	unocss: {
		preflight: true,
		disableNuxtInlineStyle: false
	},
	shadcn: {
		prefix: '',
		componentDir: './app/components/ui'
	},
	veeValidate: {
		componentNames: {
			Form: 'VeeForm',
			Field: 'VeeField',
			FieldArray: 'VeeFieldArray',
			ErrorMessage: 'VeeErrorMessage'
		}
	},
	runtimeConfig: {
		public: {
			turnstileSiteKey: ''
		},
		adminPassword: '',
		turnstileSecretKey: '',
		hello: ''
	},
	compatibilityDate: '2024-07-26'
})
