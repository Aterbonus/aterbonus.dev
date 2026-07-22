import * as v from 'valibot'
import '@valibot/i18n/es'

export default defineNuxtPlugin({
	name: 'valibot-i18n',
	enforce: 'pre',
	setup() {
		v.setGlobalConfig({ lang: 'es' })
	},
})
