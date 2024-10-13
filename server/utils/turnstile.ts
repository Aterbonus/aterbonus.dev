import type { H3Event } from 'h3'

export async function requireCaptcha(event: H3Event, tokenName: string = 'token') {
	const { [tokenName]: token } = await readBody(event)

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

	return turnstile
}
