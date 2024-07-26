<script lang="ts" setup>
import { ConfigProvider } from 'radix-vue'

const getId = () => useId()
</script>

<template>
	<ConfigProvider :use-id="getId">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</ConfigProvider>
</template>
