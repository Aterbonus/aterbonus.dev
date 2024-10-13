import type { Comment } from '~~/server/utils/schemas/toys/comments'
import { createHash } from 'node:crypto'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	try {
		await getValidatedQuery(event, v.parser(v.object({
			password: v.pipe(v.string(), v.check(input => input === config.commentsPassword))
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

	const comments = await drizzle
		.select()
		.from(tables.misc)
		.orderBy(desc(tables.misc.createdAt))
		.where(eq(tables.misc.type, 'comment'))
		.limit(limit)
		.offset(offset)

	return comments.map((comment) => {
		const decodedComment = JSON.parse(comment.content) as Comment

		return {
			id: comment.id,
			createdAt: comment.createdAt,
			name: decodedComment.name,
			comment: decodedComment.comment,
			profileURL: `https://gravatar.com/avatar/${createHash('sha256').update(decodedComment.email.toLowerCase()).digest('hex')}`
		}
	}).reverse()
})
