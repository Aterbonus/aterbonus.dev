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
const { data: comments, execute, status } = useFetch('/api/toys/comments', {
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

const fetchComments = form.handleSubmit(async (values) => {
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
		<Card v-if="!comments" class="min-w-340px place-self-center">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form id="login" @submit="fetchComments">
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
				<CardTitle>Comentarios</CardTitle>
				<CardDescription>
					El dueño de la página se reserva el derecho a admisión
				</CardDescription>
			</CardHeader>
			<ScrollArea class="overflow-hidden p-4" type="always">
				<div
					v-for="comment of comments" :key="comment.id"
					class="group mb-3 flex even:justify-start odd:justify-end"
				>
					<div
						class="max-w-xs rounded-lg px-4 py-2 lg:max-w-md xl:max-w-lg group-even:bg-muted group-odd:(bg-primary text-primary-foreground)"
					>
						<div class="mb-1 flex items-center">
							<Avatar class="mr-2 h-6 w-6">
								<AvatarImage :src="comment.profileURL" :alt="comment.name" />
								<AvatarFallback>{{ comment.name[0] }}</AvatarFallback>
							</Avatar>
							<span class="text-sm font-semibold">{{ comment.name }}</span>
							<span class="ml-2 text-xs opacity-75">{{ formatTime(comment.createdAt) }}</span>
						</div>
						<p>{{ comment.comment }}</p>
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
