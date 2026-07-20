<script lang="ts" setup>
useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll',
	},
})
</script>

<template>
	<UApp>
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</UApp>
</template>
