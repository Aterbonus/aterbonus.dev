<script setup lang="ts">
import { es } from '@nuxt/ui/locale'
</script>

<template>
	<UApp :locale="es">
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
