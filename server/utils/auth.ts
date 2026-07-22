import type { H3Event } from '#imports'
import { drizzleAdapter } from '@better-auth/drizzle-adapter'
import { betterAuth } from 'better-auth'
import { admin, captcha } from 'better-auth/plugins'
import * as schema from '#server/db/schema'

function createAuth(event: H3Event) {
	const config = useRuntimeConfig(event)

	return betterAuth({
		database: drizzleAdapter(useDb(), {
			provider: 'sqlite',
			schema,
		}),
		emailAndPassword: {
			enabled: true,
		},
		plugins: [admin(), captcha({
			provider: 'cloudflare-turnstile',
			secretKey: config.turnstile.secretKey,
		})],
		baseURL: config.betterAuth.baseUrl,
		secret: config.betterAuth.secret,
	})
}

let auth: ReturnType<typeof createAuth>

export function useAuth(event: H3Event) {
	if (auth) {
		return auth
	}

	auth = createAuth(event)
	return auth
}

export async function requireAuth(event: H3Event) {
	const auth = await useAuth(event).api.getSession({ headers: useEvent().headers })

	if (!auth?.user) {
		throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
	}

	return auth
}
