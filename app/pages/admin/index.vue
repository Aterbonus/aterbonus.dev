<script lang="ts" setup>
const { logout: logoutUser } = useAuthStore()

definePageMeta({
	auth: true,
	layout: 'admin'
})

async function logout() {
	logoutUser()
}
</script>

<template>
	<div>
		<h1>Logueado</h1>
		<Button @click="logout">
			Logout
		</Button>
	</div>
</template>
