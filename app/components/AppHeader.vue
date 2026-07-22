<script lang="ts" setup>
const authStore = useAuthStore()
const router = useRouter()

async function logout() {
	await authStore.signOut()
	router.push('/')
}
</script>

<template>
	<UHeader title="Ater" :toggle="false">
		<template #right>
			<UColorModeButton />
			<UButton v-if="authStore.isLoggedIn" @click="logout">
				Logout
			</UButton>
			<UButton v-else to="/admin/login">
				Login
			</UButton>
		</template>
	</UHeader>
</template>
