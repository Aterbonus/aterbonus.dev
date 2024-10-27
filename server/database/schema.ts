import { sql } from 'drizzle-orm'
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
	id: integer().primaryKey({ autoIncrement: true }),
	content: text().notNull(),
	createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(unixepoch() * 1000)`).notNull()
}, table => ({
	createdAtIdx: index('posts_created_at_idx').on(table.createdAt)
}))

export const misc = sqliteTable('misc', {
	id: integer().primaryKey({ autoIncrement: true }),
	createdAt: integer({ mode: 'timestamp_ms' }).default(sql`(unixepoch() * 1000)`).notNull(),
	type: text().notNull(),
	content: text({ mode: 'json' }).notNull().$type<object>()
}, table => ({
	createdAtIdx: index('misc_created_at_idx').on(table.createdAt),
	typeIdx: index('misc_type_idx').on(table.type)
}))
