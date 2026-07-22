import type { AuthSession, AuthSessionData, AuthUser } from '~/composables/auth'
import { useMutation, useQuery, useQueryCache } from '@pinia/colada'
import { defineStore } from 'pinia'

type AuthSessionResult = AuthSession | null

interface SignInPayload {
	email: string
	password: string
	token: string
	rememberMe?: boolean
}

export const useAuthStore = defineStore('auth', () => {
	const authClient = useAuthClient()
	const queryCache = useQueryCache()

	const sessionQuery = useQuery({
		key: () => ['auth', 'session'] as const,
		query: async (): Promise<AuthSessionResult> => {
			const result = await authClient.getSession()
			return (result?.data ?? null) as AuthSessionResult
		},
	})

	const signInMutation = useMutation({
		mutation: async (payload: SignInPayload) => {
			return new Promise<unknown>((resolve, reject) => {
				authClient.signIn.email(payload, {
					headers: {
						'x-captcha-response': payload.token,
					},
					onSuccess(ctx) {
						resolve(ctx)
					},
					onError(ctx) {
						reject(ctx.error)
					},
				})
			})
		},
		async onSettled() {
			await queryCache.invalidateQueries({
				key: ['auth', 'session'],
				exact: true,
			})
		},
	})

	const signOutMutation = useMutation({
		mutation: async () => {
			await authClient.signOut()
		},
		async onSettled() {
			await queryCache.invalidateQueries({
				key: ['auth', 'session'],
				exact: true,
			})
		},
	})

	const data = computed<AuthSessionResult>(() => sessionQuery.data.value ?? null)
	const user = computed<AuthUser | null>(() => data.value?.user ?? null)
	const session = computed<AuthSessionData | null>(() => data.value?.session ?? null)
	const isLoggedIn = computed(() => !!session.value)
	const ready = computed(() => !sessionQuery.isPending.value)

	async function refresh() {
		await queryCache.invalidateQueries({
			key: ['auth', 'session'],
			exact: true,
		})
	}

	function signIn(email: string, password: string, token: string, rememberMe = false) {
		return signInMutation.mutateAsync({ email, password, rememberMe, token })
	}

	function signOut() {
		return signOutMutation.mutateAsync()
	}

	return {
		user,
		session,
		isLoggedIn,
		ready,
		refresh,
		signIn,
		signOut,
	}
})
