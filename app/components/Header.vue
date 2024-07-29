<script lang="ts" setup>
const isDark = useDark()
</script>

<template>
	<header class="border-b">
		<nav class="flex items-center py-3 container">
			<NuxtLink to="/" class="font-bold">
				Ater
			</NuxtLink>
			<button type="button" class="ml-auto">
				<UnoIcon class="i-fxemoji-sunwithface dark:i-fxemoji-newmoonwithface" @click="isDark = !isDark" />
			</button>
		</nav>
	</header>
</template>
