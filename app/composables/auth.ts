import { createAuthClient } from 'better-auth/vue'

let authClient: ReturnType<typeof createAuthClient> | undefined

export function useAuthClient() {
	if (import.meta.client) {
		if (!authClient) {
			authClient = createAuthClient()
		}
		return authClient
	}

	const url = useRequestURL()
	const headers = useRequestHeaders(['cookie'])

	return createAuthClient({
		baseURL: url.origin,
		fetchOptions: { headers },
	})
}

export type AuthClient = ReturnType<typeof createAuthClient>
export type AuthSession = AuthClient['$Infer']['Session']
export type AuthUser = AuthSession['user']
export type AuthSessionData = AuthSession['session']
