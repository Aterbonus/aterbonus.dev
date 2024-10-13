export default eventHandler(async (event) => {
	const adminPassword = useRuntimeConfig(event).adminPassword

	if (!adminPassword) {
		throw createError({
			statusCode: 500,
			message: 'No se ha configurado la contraseña'
		})
	}

	await requireCaptcha(event)

	const { password } = (await readBody(event)) || {}

	if (password !== adminPassword) {
		throw createError({
			statusCode: 401,
			message: 'Contraseña equivocada'
		})
	}

	await setUserSession(event, {
		user: { admin: true }
	})

	return { ok: true }
})
