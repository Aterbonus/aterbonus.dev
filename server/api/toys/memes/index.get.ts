import type { Meme } from '~~/server/utils/schemas/toys/memes'
import { useDrizzle } from '#build/types/nitro-imports'
import * as v from 'valibot'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	try {
		await getValidatedQuery(event, v.parser(v.object({
			password: v.pipe(v.string(), v.check(input => input === config.memesPassword))
		})))
	}
	catch {
		throw createError({
			status: 401,
			message: 'Contraseña errronea'
		})
	}

	const drizzle = useDrizzle()

	const memes = await drizzle
		.select()
		.from(tables.misc)
		.orderBy(desc(tables.misc.createdAt))
		.where(eq(tables.misc.type, 'meme'))
		.limit(20)

	return memes.map((meme) => {
		const decodedMeme = meme.content as Meme

		return {
			id: meme.id,
			createdAt: meme.createdAt,
			name: decodedMeme.name,
			description: decodedMeme.description,
			pathname: `/images/${decodedMeme.pathname}`
		}
	})
})
