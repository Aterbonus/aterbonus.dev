export default defineEventHandler(async (event) => {
	if (!isPreflightRequest(event)) {
		return
	}

	return handleCors(event, {
		origin: '*',
		preflight: {
			statusCode: 204
		},
		methods: '*'
	})
})
