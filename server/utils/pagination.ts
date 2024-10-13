import type { H3Event } from 'h3'
import * as v from 'valibot'

export function usePagination(event: H3Event) {
	return getValidatedQuery(
		event,
		v.parser(
			v.object({
				limit: v.pipe(
					v.optional(v.string(), '10'),
					v.transform(input => Number(input)),
					v.integer('El límite debe ser un entero'),
					v.minValue(0, 'El límite debe ser como mínimo 0'),
					v.maxValue(100, 'El límite debe ser como máximo 100')
				),
				offset: v.pipe(
					v.optional(v.string(), '0'),
					v.transform(input => Number(input)),
					v.integer('El desplazamiento debe ser un entero'),
					v.minValue(0, 'El desplazamiento debe ser como mínimo 0')
				)
			})
		)
	)
}
