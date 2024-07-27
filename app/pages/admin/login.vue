<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'
import { useToast } from '~/components/ui/toast'

definePageMeta({
	layout: 'nothing',
	auth: 'guest'
})
const { fetch: refreshSession } = useUserSession()
const { toast } = useToast()
const form = useForm({
	validationSchema: toTypedSchema(
		v.object({
			password: v.pipe(v.string(), v.nonEmpty('Es requerido'))
		})
	)
})

const login = form.handleSubmit(async (values) => {
	await $fetch('/api/auth/login', {
		method: 'POST',
		body: { password: values.password }
	}).then(async () => {
		await refreshSession()
		toast({
			title: 'Logueado correctamente'
		})
		await navigateTo('/admin')
	}).catch(() => toast({
		title: 'Password erronea'
	}))
})
</script>

<template>
	<div class="pt-32">
		<Card class="mx-auto max-w-360px">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form id="login" @submit="login">
					<FormField v-slot="{ componentField }" name="password">
						<FormItem v-auto-animate>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input type="password" placeholder="******" v-bind="componentField" />
							</FormControl>
							<FormMessage />
						</FormItem>
					</FormField>
				</form>
			</CardContent>
			<CardFooter>
				<Button form="login" class="ml-auto" type="submit" :disabled="!form.isSubmitting">
					Login
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>
