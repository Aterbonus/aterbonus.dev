<script lang="ts" setup>
import * as v from 'valibot'

definePageMeta({
	layout: false
})

const form = useForm({
	validationSchema: toTypedSchema(
		v.object({
			password: v.pipe(v.string('La contraseña es requerida'), v.nonEmpty('La contraseña es requerida'))
		})
	)
})

const password = ref('')
const { data: forms, execute, status } = useFetch('/api/toys/forms', {
	query: {
		password
	},
	immediate: false,
	watch: false,
	onResponseError({ response }) {
		if (response.status === 401) {
			form.setFieldError('password', 'La contraseña es erronea')
		}
	}
})

const fetchForms = form.handleSubmit(async (values) => {
	password.value = values.password
	await execute()
})

function formatTime(date: string) {
	return new Intl.DateTimeFormat('default', {
		hour: 'numeric',
		minute: 'numeric'
	}).format(new Date(date))
}
</script>

<template>
	<div class="grid h-100svh p-4 container">
		<Card v-if="!forms" class="min-w-340px place-self-center">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form id="login" @submit="fetchForms">
					<FormField v-slot="{ componentField }" name="password">
						<FormItem v-auto-animate class="mb-3">
							<FormLabel class="transition-colors">
								Password
							</FormLabel>
							<FormControl>
								<Input type="password" placeholder="******" v-bind="componentField" />
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
				</form>
			</CardContent>
			<CardFooter>
				<Button form="login" class="ml-auto" type="submit" :disabled="form.isSubmitting.value">
					Login
				</Button>
			</CardFooter>
		</Card>
		<Card v-else class="grid grid-rows-[auto_1fr_auto] overflow-hidden">
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
						class="max-w-500px max-w-xs w-full rounded-lg px-4 py-2 lg:max-w-md xl:max-w-lg group-even:bg-muted group-odd:(bg-primary text-primary-foreground)"
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
