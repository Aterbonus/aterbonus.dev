<script lang="ts" setup>
import type { AuthFormField, FormSubmitEvent } from '@nuxt/ui'
import type { LoginSchemaOutput } from '#shared/schemas/login'
import { LoginSchema } from '#shared/schemas/login'

const fields = ref<AuthFormField[]>([
	{
		name: 'email',
		type: 'email',
		label: 'E-mail',
		placeholder: 'Ingresa tu email',
		required: true,
	},
	{
		name: 'password',
		type: 'password',
		label: 'Contraseña',
		placeholder: 'Ingresa tu contraseña',
		required: true,
	},
	{
		name: 'remember',
		type: 'checkbox',
		label: 'Recordarme',
	},
])

const toast = useToast()
const router = useRouter()
const authStore = useAuthStore()

async function onSubmit(payload: FormSubmitEvent<LoginSchemaOutput>) {
	const { email, password, remember } = payload.data

	try {
		await authStore.signIn(email, password, remember)
		router.push('/admin/private')
	}
	catch (ex) {
		if (ex instanceof Error) {
			toast.add({
				title: 'Error',
				description: ex.message,
			})
		}
		else {
			toast.add({
				title: 'Error',
			})
		}
	}
}
</script>

<template>
	<div class="flex items-center justify-center px-4 py-16">
		<UPageCard class="max-w-sm w-full">
			<UAuthForm title="Login" :fields="fields" :schema="LoginSchema" @submit="onSubmit" />
		</UPageCard>
	</div>
</template>
