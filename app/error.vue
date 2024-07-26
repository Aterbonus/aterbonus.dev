<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import type { NuxtError } from '#app'

defineProps({
	error: Object as () => NuxtError
})

const handleError = () => clearError({ redirect: '/' })
const getId = () => useId()
useDark()
</script>

<template>
	<ConfigProvider :use-id="getId">
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
				<Button @click="handleError">
					Volver al inicio
				</Button>
			</div>
		</div>
	</ConfigProvider>
</template>
