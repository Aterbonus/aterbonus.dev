<script lang="ts" setup>
useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll',
	},
})
</script>

<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<div class="font-sans">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>
