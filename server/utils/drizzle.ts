import { drizzle } from 'drizzle-orm/d1'
import * as schema from '../database/schema'

export { and, asc, desc, eq, or, sql } from 'drizzle-orm'

export const tables = schema

export function useDrizzle() {
	return drizzle(hubDatabase(), { schema })
}

export type Post = typeof schema.posts.$inferSelect
export type Mist = typeof schema.misc.$inferSelect
