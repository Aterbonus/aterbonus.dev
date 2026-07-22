export default defineEventHandler((event) => {
	return useAuth(event).handler(toWebRequest(event))
})
