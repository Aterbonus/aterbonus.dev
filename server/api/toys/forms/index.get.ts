import type { Form } from '~~/server/utils/schemas/toys/forms'
import { useDrizzle } from '~~/server/utils/drizzle'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	try {
		await getValidatedQuery(event, v.parser(v.object({
			password: v.pipe(v.string(), v.check(input => input === config.formsPassword))
		})))
	}
	catch {
		throw createError({
			status: 401,
			message: 'Contraseña errronea'
		})
	}
	const { limit, offset } = await usePagination(event)

	const drizzle = useDrizzle()

	const forms = await drizzle
		.select()
		.from(tables.misc)
		.orderBy(desc(tables.misc.createdAt))
		.where(eq(tables.misc.type, 'form'))
		.limit(limit)
		.offset(offset)

	return forms.map((comment) => {
		const decodedForm = comment.content as Form

		return {
			id: comment.id,
			createdAt: comment.createdAt,
			name: decodedForm.name,
			email: decodedForm.email,
			subject: decodedForm.subject,
			content: decodedForm.content
		}
	}).reverse()
})
