export default defineNuxtRouteMiddleware((to) => {
	const { loggedIn } = useUserSession()
	const auth = to.meta.auth ?? true

	if (auth) {
		if (auth === 'guest') {
			if (loggedIn.value) {
				return navigateTo('/admin')
			}

			return
		}

		if (!loggedIn.value) {
			return navigateTo('/')
		}
	}
})