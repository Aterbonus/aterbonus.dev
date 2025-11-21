import * as v from 'valibot'

export const validateForm = v.parser(v.object({
	name: v.pipe(v.string('name debe ser string'), v.trim(), v.nonEmpty('name no debe ser vacío'), v.maxLength(200, 'name debe tener como máximo 200 caracteres')),
	email: v.pipe(v.string('email debe ser string'), v.trim(), v.email('email debe ser un e-mail'), v.maxLength(200, 'email debe tener como máximo 200 caracteres')),
	subject: v.pipe(v.string('subject debe ser string'), v.trim(), v.nonEmpty('subject no debe ser vacío'), v.maxLength(200, 'subject debe tener como máximo 200 caracteres')),
	content: v.pipe(v.string('content debe ser string'), v.trim(), v.nonEmpty('content no debe ser vacío'), v.maxLength(1000, 'subject debe tener como máximo 1000 caracteres'))
}))
export type CreateCommentForm = ReturnType<typeof validateForm>
export interface Form {
	name: string
	email: string
	subject: string
	content: string
}
