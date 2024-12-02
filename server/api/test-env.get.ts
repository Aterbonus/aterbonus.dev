export default eventHandler((event) => {
	const runtimeConfig = useRuntimeConfig(event)

	return {
		'runtimeConfig().hello': useRuntimeConfig().hello,
		'runtimeConfig(event).hello': runtimeConfig.hello,
		'import.meta.env.NUXT_HELLO': import.meta.env.NUXT_HELLO,
		'process.env.NUXT_HELLO': process.env.NUXT_HELLO,
		'runtimeConfig().number': useRuntimeConfig().number,
		'runtimeConfig(event).number': runtimeConfig.number,
		'import.meta.env.NUXT_NUMBER': import.meta.env.NUXT_NUMBER,
		'process.env.NUXT_NUMBER': process.env.NUXT_NUMBER
	}
})
