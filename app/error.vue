<script setup lang="ts">
import { ConfigProvider } from 'radix-vue'
import type { NuxtError } from '#app'

defineProps({
	error: Object as () => NuxtError
})

useHead({
	bodyAttrs: {
		class: 'overflow-y-scroll'
	}
})

const useIdFunction = () => useId()
const handleError = () => clearError({ redirect: '/' })
useDark()
</script>

<template>
	<ConfigProvider :use-id="useIdFunction">
		<NuxtRouteAnnouncer />
		<NuxtLoadingIndicator />
		<main class="grid h-screen place-items-center px-4 text-center container supports-[(height:100svh)]:h-100svh">
			<div class="max-w-full min-w-0">
				<template v-if="error?.statusCode === 404">
					<h1 class="text-20">
						404
					</h1>
					<h2 class="mb-4 text-5">
						Página no encontrada
					</h2>
				</template>
				<template v-else>
					<h1 class="mb-3 text-8">
						Ocurrió un error inesperado 😢
					</h1>
					<DevOnly>
						<h2 class="mb-3 text-5">
							{{ error?.message }}
						</h2>
						<ScrollArea class="mb-4 h-240px border p-4">
							<code v-if="error?.stack" class="break-words text-left" v-html="error.stack" />
							<ScrollBar orientation="horizontal" />
						</ScrollArea>
					</DevOnly>
				</template>
				<Button @click="handleError">
					Volver al inicio
				</Button>
			</div>
		</main>
	</ConfigProvider>
</template>
