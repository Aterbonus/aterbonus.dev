export default eventHandler(async (event) => {
	const adminPassword = useRuntimeConfig(event).adminPassword

	if (!adminPassword) {
		throw createError({
			statusCode: 500,
			message: 'No se ha configurado el password'
		})
	}

	const { password } = (await readBody(event)) || {}

	if (password !== adminPassword) {
		throw createError({
			statusCode: 401,
			message: 'Password erronea'
		})
	}

	await setUserSession(event, {
		user: { admin: true }
	})

	return { ok: true }
})
