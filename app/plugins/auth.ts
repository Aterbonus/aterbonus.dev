export default defineNuxtPlugin(async () => {
	const authStore = useAuthStore(usePinia())
	await authStore.refresh()
})
