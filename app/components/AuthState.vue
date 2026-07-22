<script lang="ts" setup>
const { isLoggedIn, user, session, ready } = useAuthStore()
</script>

<template>
	<slot
		v-if="ready"
		v-bind="{ isLoggedIn, user, session }"
	/>
	<slot
		v-else
		name="placeholder"
	/>
</template>
