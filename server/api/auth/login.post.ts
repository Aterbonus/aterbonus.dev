export default eventHandler(async (event) => {
	const adminPassword = useRuntimeConfig(event).adminPassword

	if (!adminPassword) {
		throw createError({
			statusCode: 500,
			message: 'No se ha configurado la contraseña'
		})
	}

	const { password, token } = (await readBody(event)) || {}

	if (!token) {
		throw createError({
			statusCode: 422,
			statusMessage: 'Token no enviado'
		})
	}

	const turnstile = await verifyTurnstileToken(token, event)

	if (!turnstile.success) {
		throw createError({
			statusCode: 401,
			message: `Captcha no aprobado (${turnstile['error-codes']})`
		})
	}

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
