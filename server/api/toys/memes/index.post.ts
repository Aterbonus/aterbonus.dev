import { createValidateCreateMeme } from '~~/server/utils/schemas/toys/memes'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)
	const form = await readFormData(event)
	const image = form.get('image') as File

	let validatedData

	try {
		validatedData = createValidateCreateMeme(config.memesUploadPassword)({
			name: form.get('name'),
			description: form.get('description'),
			password: form.get('password')
		})
	}
	catch (ex) {
		throw createError({
			statusCode: 400,
			data: ex,
			message: `Error de validación: ${ex?.message ?? 'Something'}`
		})
	}

	if (!image || !image.size) {
		throw createError({ statusCode: 400, message: 'La imagen no fue enviada' })
	}

	ensureBlob(image, {
		maxSize: '2MB',
		types: ['image']
	})

	const blob = await hubBlob().put(image.name, image, {
		addRandomSuffix: true,
		prefix: 'memes'
	})

	const drizzle = useDrizzle()

	return drizzle.insert(tables.misc).values([{
		content: {
			name: validatedData.name,
			description: validatedData.description,
			pathname: blob.pathname
		},
		type: 'meme'
	}]).returning()
})
