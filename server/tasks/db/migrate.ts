import { migrate } from 'drizzle-orm/d1/migrator'

export default defineTask({
	meta: {
		name: 'db:migrate',
		description: 'Run database migrations'
	},
	async run() {
		await migrate(useDrizzle(), { migrationsFolder: 'server/database/migrations' })
		return { result: 'success' }
	}
})
