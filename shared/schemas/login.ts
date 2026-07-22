import * as v from 'valibot'

export const LoginSchema = v.object({
	email: v.pipe(v.string('No debe ser vacío'), v.email()),
	password: v.pipe(v.string('No debe ser vacío'), v.minLength(8)),
	remember: v.optional(v.boolean()),
})

export type LoginSchemaOutput = v.InferOutput<typeof LoginSchema>

export const validateLoginSchema = v.parser(LoginSchema)
