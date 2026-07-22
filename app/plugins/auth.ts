export default defineNuxtPlugin({
	setup: async () => {
		const authStore = useAuthStore(usePinia())
		await authStore.refresh()
	},
	parallel: true,
})
