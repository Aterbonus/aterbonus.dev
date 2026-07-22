export default defineNuxtRouteMiddleware(async (to) => {
	const authStore = useAuthStore(usePinia())

	if (!authStore.isLoggedIn) {
		return navigateTo({ path: '/login', query: { redirect: to.fullPath } })
	}
})
