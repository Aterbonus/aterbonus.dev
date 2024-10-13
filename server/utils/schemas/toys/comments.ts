import * as v from 'valibot'

export function createValidateCreateComment(password: string) {
	return v.parser(v.object({
		name: v.pipe(v.string(), v.trim(), v.maxLength(120)),
		email: v.pipe(v.string(), v.trim(), v.email()),
		comment: v.pipe(v.string(), v.trim(), v.maxLength(1000)),
		password: v.pipe(v.string(), v.check(input => input === password))
	}))
}
export type CreateCommentForm = ReturnType<ReturnType<typeof createValidateCreateComment>>
export interface Comment {
	email: string
	name: string
	comment: string
}
