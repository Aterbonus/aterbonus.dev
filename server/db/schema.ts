import { sqliteTable } from 'drizzle-orm/sqlite-core'
import * as t from 'drizzle-orm/sqlite-core'

// https://better-auth.com/docs/concepts/database#core-schema
// https://better-auth.com/docs/plugins/admin#schema

export const user = sqliteTable('user', {
	id: t.text('id').primaryKey(),
	name: t.text('name').notNull(),
	email: t.text('email').notNull().unique(),
	emailVerified: t.integer('email_verified').notNull(),
	image: t.text('image'),
	createdAt: t.integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: t.integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
	role: t.text('role'),
	banned: t.integer('banned'),
	banReason: t.text('ban_reason'),
	banExpires: t.integer('ban_expires', { mode: 'timestamp_ms' }),
})

export const session = sqliteTable('session', {
	id: t.text('id').primaryKey(),
	userId: t.text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	token: t.text('token').notNull().unique(),
	expiresAt: t.integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
	ipAddress: t.text('ip_address'),
	userAgent: t.text('user_agent'),
	createdAt: t.integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: t.integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
	impersonatedBy: t.text('impersonated_by'),
})

export const account = sqliteTable('account', {
	id: t.text('id').primaryKey(),
	userId: t.text('user_id').notNull().references(() => user.id, { onDelete: 'cascade' }),
	accountId: t.text('account_id').notNull(),
	providerId: t.text('provider_id').notNull(),
	accessToken: t.text('access_token'),
	refreshToken: t.text('refresh_token'),
	accessTokenExpiresAt: t.integer('access_token_expires_at', { mode: 'timestamp_ms' }),
	refreshTokenExpiresAt: t.integer('refresh_token_expires_at', { mode: 'timestamp_ms' }),
	scope: t.text('scope'),
	idToken: t.text('id_token'),
	password: t.text('password'),
	createdAt: t.integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: t.integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
})

export const verification = sqliteTable('verification', {
	id: t.text('id').primaryKey(),
	identifier: t.text('identifier').notNull(),
	value: t.text('value').notNull(),
	expiresAt: t.integer('expires_at', { mode: 'timestamp_ms' }).notNull(),
	createdAt: t.integer('created_at', { mode: 'timestamp_ms' }).notNull(),
	updatedAt: t.integer('updated_at', { mode: 'timestamp_ms' }).notNull(),
})
