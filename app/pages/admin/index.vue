<script lang="ts" setup>
const { clear } = useUserSession()

definePageMeta({
	auth: true
})

async function logout() {
	await clear()
	navigateTo('/')
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
