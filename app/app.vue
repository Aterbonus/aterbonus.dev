<script lang="ts" setup>
import { ConfigProvider } from 'radix-vue'

useDark()
const useIdFunction = () => useId()
</script>

<template>
	<ConfigProvider :use-id="useIdFunction">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
		<Toaster />
	</ConfigProvider>
</template>
