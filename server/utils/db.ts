import { drizzle } from 'drizzle-orm/d1'

let db: ReturnType<typeof drizzle>

export function useDb() {
	const { context } = useEvent()

	if (db) {
		return db
	}

	db = drizzle(context.cloudflare.env.DB)

	return db
}
