<script lang="ts" setup>
const isDark = useDark()
</script>

<template>
	<header class="border-b">
		<div class="space-between container-inset py-2 flex gap-3">
			<NuxtLink to="/" class="text-5 leading-none font-bold transition-color">
				Ater
			</NuxtLink>
			<button type="button" class="leading-none ml-auto cursor-pointer" title="Cambio de tema">
				<UnoIcon class="i-fxemoji-sunwithface dark:i-fxemoji-newmoonwithface" @click="isDark = !isDark" />
			</button>
		</div>
	</header>
</template>
