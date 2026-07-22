import { user } from '../db/schema'

export default defineEventHandler(async () => {
	await useAuth().api.createUser({
		body: {
			email: 'aterbonus@gmail.com',
			password: 'huf-ULN.dHT9mTL*h3UtCH62',
			name: 'Aterbonus',
		},
	})
	return useDb().select().from(user).all()
})
