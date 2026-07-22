import { eq } from 'drizzle-orm'
import { user } from '~~/server/db/schema'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)
	const body = await readBody(event)

	if (!config.bootstrapSecret) {
		throw createError({ statusCode: 403, statusMessage: 'No secret configured' })
	}

	const bootstrapSecret = getHeader(event, 'x-bootstrap-secret')
	if (config.bootstrapSecret !== '' && bootstrapSecret !== config.bootstrapSecret) {
		throw createError({ statusCode: 403, statusMessage: 'Forbidden' })
	}

	const auth = useAuth(event)

	const db = useDb()
	const admin = await db.select({ id: user.id }).from(user).where(eq(user.role, 'admin'))

	if (admin.length) {
		throw createError({ statusCode: 403, statusMessage: 'There is other admin' })
	}

	await auth.api.createUser({
		body: {
			email: body.email,
			password: body.password,
			name: body.name,
			role: 'admin',
		},
	})

	return { ok: true }
})
