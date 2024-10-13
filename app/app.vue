<script lang="ts" setup>
import { ConfigProvider } from 'radix-vue'

useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll'
	}
})
const useIdFunction = () => useId()
</script>

<template>
	<ConfigProvider :use-id="useIdFunction">
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<div class="font-sans">
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
			<Toaster />
		</div>
	</ConfigProvider>
</template>
