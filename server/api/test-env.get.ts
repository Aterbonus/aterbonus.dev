export default eventHandler((event) => {
	const runtimeConfig = useRuntimeConfig(event)

	return {
		'runtimeConfig().hello': useRuntimeConfig().hello,
		'runtimeConfig(event).hello': runtimeConfig.hello,
		'import.meta.env.NUXT_HELLO': import.meta.env.NUXT_HELLO,
		'process.env.NUXT_HELLO': process.env.NUXT_HELLO,
		'runtimeConfig().NUMBER': useRuntimeConfig().number,
		'runtimeConfig(event).NUMBER': runtimeConfig.number,
		'import.meta.env.NUXT_NUMBER': import.meta.env.NUXT_NUMBER,
		'process.env.NUXT_NUMBER': process.env.NUXT_NUMBER
	}
})
