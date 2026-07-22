import * as v from 'valibot'
import '@valibot/i18n/es'

export default defineNitroPlugin(() => {
	v.setGlobalConfig({ lang: 'es' })
})
