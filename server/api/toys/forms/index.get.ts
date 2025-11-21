import type { Form } from '~~/server/utils/schemas/toys/forms'

export default defineEventHandler(async (event) => {
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
