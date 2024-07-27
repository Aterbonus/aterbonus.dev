<script lang="ts" setup>
import { ConfigProvider } from 'radix-vue'

useDark()
</script>

<template>
	<ConfigProvider :use-id="useId">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</ConfigProvider>
</template>
