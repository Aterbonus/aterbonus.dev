import { sql } from 'drizzle-orm'
import { index, integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const posts = sqliteTable('posts', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	content: text('content').notNull(),
	createdAt: integer('created_at', { mode: 'number' }).default(sql`(unixepoch() * 1000)`).notNull()
}, table => ({
	createdAtIdx: index('posts_created_at_idx').on(table.createdAt)
}))

export const misc = sqliteTable('misc', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	createdAt: integer('created_at', { mode: 'number' }).default(sql`(unixepoch() * 1000)`).notNull(),
	type: text('type').notNull(),
	content: text('content').notNull()
}, table => ({
	createdAtIdx: index('misc_created_at_idx').on(table.createdAt),
	typeIdx: index('misc_type_idx').on(table.type)
}))
