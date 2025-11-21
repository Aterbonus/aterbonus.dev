<script lang="ts" setup>
import * as v from 'valibot'

definePageMeta({
	layout: false
})

const { data: forms, execute, status } = useFetch('/api/toys/forms')

function formatTime(date: string) {
	return new Intl.DateTimeFormat('default', {
		hour: 'numeric',
		minute: 'numeric'
	}).format(new Date(date))
}
</script>

<template>
	<div class="grid h-100svh p-4 container">
		<Card class="grid grid-rows-[auto_1fr_auto] overflow-hidden">
			<CardHeader>
				<CardTitle>Formularios</CardTitle>
				<CardDescription>
					El dueño de la página se reserva el derecho a admisión
				</CardDescription>
			</CardHeader>
			<ScrollArea class="overflow-hidden p-4" type="always">
				<div
					v-for="currentForm of forms" :key="currentForm.id"
					class="group mb-3 flex justify-center"
				>
					<div
						class="break-all max-w-500px max-w-xs w-full rounded-lg px-4 py-2 lg:max-w-md xl:max-w-lg group-even:bg-muted group-odd:(bg-primary text-primary-foreground)"
					>
						<div class="mb-1 flex items-center">
							<span class="text-sm font-semibold">{{ currentForm.name }}</span>
							<span class="ml-2 text-xs opacity-75">{{ formatTime(currentForm.createdAt) }}</span>
						</div>
						<p><strong>Asunto: {{ currentForm.subject }}</strong></p>
						<p>{{ currentForm.content }}</p>
					</div>
				</div>
			</ScrollArea>
			<CardFooter class="border-t p-4">
				<Button :disabled="status === 'pending'" @click="execute">
					Actualizar
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>
