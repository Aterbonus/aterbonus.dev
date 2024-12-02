import { createValidateCreateComment } from '~~/server/utils/schemas/toys/comments'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	const data = await readValidatedBody(event, createValidateCreateComment(config.commentsPassword))

	const drizzle = useDrizzle()

	return drizzle.insert(tables.misc).values([{
		content: {
			name: data.name,
			email: data.email,
			comment: data.comment
		},
		type: 'comment'
	}]).returning()
})
