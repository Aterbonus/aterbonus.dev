import { useDrizzle } from '~~/server/utils/drizzle'
import * as v from 'valibot'

export default eventHandler(async (event) => {
	await requireUserSession(event)

	const { content } = await readValidatedBody(event, v.parser(v.object({
		content: v.string()
	})))

	const drizzle = useDrizzle()

	return drizzle.insert(tables.posts).values([{
		content
	}]).returning()
})
