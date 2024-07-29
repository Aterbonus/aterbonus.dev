<script lang="ts" setup>
definePageMeta({
	auth: false
})

const subtitles = [
	'Un desarrollador más',
	'Desarrollando...',
	'Aún viendo que poner aquí',
	'Cargando frases...',
	'Cargando...'
]
const subtitle = ref(subtitles[0])

onMounted(() => {
	subtitle.value = subtitles[Math.floor(Math.random() * subtitles.length)]
})
</script>

<template>
	<div class="container">
		<div class="grid grid-cols-1 gap-5 py-20 md:(grid-cols-2 py-40)">
			<div class="text-center md:text-left">
				<h1 class="text-10 text-primary font-bold md:(text-16)">
					Gustavo Alfredo <br class="lg:block sm:hidden">Marín Sáez
				</h1>
				<h2 class="text-6 md:(text-8)">
					{{ subtitle }}
				</h2>
			</div>
			<div class="grid place-items-center">
				<div class="text-center">
					<UnoIcon class="i-fxemoji-construction mb-4 text-32" />
					<p class="text-6">
						Construyendo <span class="dots" />
					</p>
				</div>
			</div>
		</div>
	</div>
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
