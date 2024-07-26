<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
	error: Object as () => NuxtError
})
</script>

<template>
	<div class="grid h-screen place-items-center text-center supports-[(height:100svh)]:h-100svh">
		<div>
			<template v-if="error?.statusCode === 404">
				<h1 class="text-20">
					404
				</h1>
				<h2 class="mb-3 text-5">
					Página no encontrada
				</h2>
			</template>
			<template v-else>
				<h1 class="mb-3 text-5">
					Ocurrió un error inesperado 😢
				</h1>
			</template>
			<NuxtLink to="/" class="border-1px border-black rounded p-2">
				Volver al inicio
			</NuxtLink>
		</div>
	</div>
</template>
