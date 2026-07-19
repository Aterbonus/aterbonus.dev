<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps({
	error: Object as () => NuxtError,
})

useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll',
	},
})

const handleError = () => clearError({ redirect: '/' })
useDark()
</script>

<template>
	<div>
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<main class="container-inset px-4 text-center grid h-screen place-items-center supports-[(height:100svh)]:h-100svh">
			<div class="max-w-full min-w-0">
				<template v-if="error?.statusCode === 404">
					<h1 class="text-20">
						404
					</h1>
					<h2 class="text-5 mb-4">
						Página no encontrada
					</h2>
				</template>
				<template v-else>
					<h1 class="text-8 mb-3">
						Ocurrió un error inesperado 😢
					</h1>
					<DevOnly>
						<h2 class="text-5 mb-3">
							{{ error?.message }}
						</h2>
						<code v-if="error?.stack" class="text-left break-words" v-html="error.stack" />
					</DevOnly>
				</template>
				<Button @click="handleError">
					Volver al inicio
				</Button>
			</div>
		</main>
	</div>
</template>
