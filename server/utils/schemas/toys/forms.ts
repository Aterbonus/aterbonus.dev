import * as v from 'valibot'

export function createValidateCreateForm(password: string) {
	return v.parser(v.object({
		name: v.pipe(v.string(), v.trim(), v.nonEmpty(), v.maxLength(200)),
		email: v.pipe(v.string(), v.trim(), v.email(), v.maxLength(200)),
		subject: v.pipe(v.string(), v.trim(), v.nonEmpty(), v.maxLength(200)),
		content: v.pipe(v.string(), v.trim(), v.nonEmpty(), v.maxLength(1000)),
		password: v.pipe(v.string(), v.check(input => input === password))
	}))
}
export type CreateCommentForm = ReturnType<ReturnType<typeof createValidateCreateForm>>
export interface Form {
	name: string
	email: string
	subject: string
	content: string
}
