import { drizzleAdapter } from '@better-auth/drizzle-adapter'
import { betterAuth } from 'better-auth'
import { admin } from 'better-auth/plugins'
import * as schema from '#server/db/schema'

function createAuth() {
	return betterAuth({
		database: drizzleAdapter(useDb(), {
			provider: 'sqlite',
			schema,
		}),
		emailAndPassword: {
			enabled: true,
		},
		plugins: [admin()],
	})
}

let auth: ReturnType<typeof createAuth>

export function useAuth() {
	if (auth) {
		return auth
	}

	auth = createAuth()
	return auth
}

export async function requireAuth() {
	const auth = await useAuth().api.getSession({ headers: useEvent().headers })

	if (!auth?.user) {
		throw createError({ statusCode: 401, statusMessage: 'Unauthorized' })
	}

	return auth
}
