<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
	error: Object as () => NuxtError,
})

useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll',
	},
})

const handleError = () => clearError({ redirect: '/' })
useDark()
</script>

<template>
	<UApp>
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<UError :error="error" />
	</UApp>
</template>
