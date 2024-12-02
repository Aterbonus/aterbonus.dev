import * as v from 'valibot'

export function createValidateCreateMeme(password: string) {
	return v.parser(v.object({
		name: v.pipe(v.string('El nombre debe ser un string'), v.trim(), v.nonEmpty('El nombre no puede ser vacio'), v.maxLength(100, 'El largo máximo del nombre debe ser de 100 caracteres')),
		description: v.pipe(v.string('La descripción debe ser un string'), v.trim(), v.nonEmpty('La descripción no puede ser vacia'), v.maxLength(200, 'El largo máximo de la descripción debe ser de 200 caracteres')),
		password: v.pipe(v.string('La contraseña debe ser un string'), v.check(input => password.split(',').includes(input), 'La contraseña es incorrecta'))
	}))
}

export type CreateCommentForm = ReturnType<ReturnType<typeof createValidateCreateMeme>>
export type Meme = Omit<CreateCommentForm, 'password'> & { pathname: string }
