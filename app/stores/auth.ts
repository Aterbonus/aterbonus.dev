import { defineStore } from 'pinia'
import { useToast } from '~/components/ui/toast'

export const useAuthStore = defineStore('auth', () => {
	const { fetch: refreshSession, clear, user, loggedIn } = useUserSession()
	const { toast } = useToast()

	async function login(password: string, token: string) {
		try {
			await $fetch('/api/auth/login', {
				method: 'POST',
				body: { password, token }
			})
			await refreshSession()
			toast({
				title: 'Logueado correctamente'
			})
			await navigateTo('/admin')
		}
		catch (e: any) {
			toast({
				title: e.data?.message ?? 'Contraseña erronea'
			})
		}
	}

	async function logout() {
		await clear()
		toast({
			title: 'Sesión finalizada'
		})
		return navigateTo('/')
	}

	return {
		login,
		logout,
		user,
		loggedIn
	}
})
