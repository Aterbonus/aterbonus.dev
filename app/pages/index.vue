<script lang="ts" setup>
const subtitles = [
	'Cargando...',
	'Un desarrollador más',
	'Desarrollando...',
	'Aún viendo que poner aquí',
	'Cargando frases...',
]
const subtitle = ref(subtitles[0])

onMounted(() => {
	subtitle.value = subtitles[Math.floor(Math.random() * subtitles.length)]
})
</script>

<template>
	<UPageHero
		title="Gustavo Alfredo Marín Sáez"
		orientation="horizontal"
		:description="subtitle"
	>
		<div class="text-center">
			<UIcon name="i-fxemoji-construction" class="size-32 mb-4" />
			<p class="text-[3rem]">
				Construyendo <span class="dots" />
			</p>
		</div>
	</UPageHero>
</template>

<style scoped>
@keyframes dots {
	0% {
		content: '';
	}

	25% {
		content: '.';
	}

	50% {
		content: '..';
	}

	75% {
		content: '...';
	}
}

.dots::after {
	content: '';
	animation: dots 2s infinite;
}
</style>
