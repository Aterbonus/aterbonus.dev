<script setup lang="ts">
import type { NuxtError } from '#app'
import { es } from '@nuxt/ui/locale'

defineProps({
	error: Object as () => NuxtError,
})
</script>

<template>
	<UApp :locale="es">
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<AppHeader />
		<UError :error="error" />
	</UApp>
</template>
