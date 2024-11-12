import { createValidateCreateForm } from '~~/server/utils/schemas/toys/forms'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig(event)

	const data = await readValidatedBody(event, createValidateCreateForm(config.formsPassword))

	const drizzle = useDrizzle()

	return drizzle.insert(tables.misc).values([{
		content: {
			name: data.name,
			email: data.email,
			subject: data.subject,
			content: data.content
		},
		type: 'form'
	}]).returning()
})
