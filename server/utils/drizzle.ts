import type { D1Database } from '@nuxthub/core'
import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export { and, asc, desc, eq, or, sql } from 'drizzle-orm'

export const tables = schema

let drizzleInstance: ReturnType<typeof drizzle<typeof schema, D1Database>> | null = null

export function useDrizzle() {
	if (!drizzleInstance) {
		drizzleInstance = drizzle(hubDatabase(), { schema, casing: 'snake_case' })
	}

	return drizzleInstance
}

export type Post = typeof schema.posts.$inferSelect
export type Misc = typeof schema.misc.$inferSelect
