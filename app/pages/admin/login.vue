<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/valibot'
import * as v from 'valibot'

definePageMeta({
	auth: 'guest'
})

const { login: loginUser } = useAuthStore()
const token = ref('')
const form = useForm({
	validationSchema: toTypedSchema(
		v.object({
			password: v.pipe(v.string('La contraseña es requerida'), v.nonEmpty('La contraseña es requerida'))
		})
	)
})

const turnstile = useTemplateRef('turnstile')

const login = form.handleSubmit(async (values) => {
	try {
		await loginUser(values.password, token.value)
	}
	finally {
		turnstile.value?.reset()
	}
})

const isDark = useDark()
</script>

<template>
	<div class="px-16 pt-32">
		<Card class="mx-auto max-w-360px">
			<CardHeader>
				<CardTitle>Login</CardTitle>
			</CardHeader>
			<CardContent>
				<form id="login" @submit="login">
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
					<NuxtTurnstile ref="turnstile" v-model="token" :options="{ theme: isDark ? 'dark' : 'light' }" />
				</form>
			</CardContent>
			<CardFooter>
				<Button form="login" class="ml-auto" type="submit" :disabled="form.isSubmitting.value || token.length === 0">
					Login
				</Button>
			</CardFooter>
		</Card>
	</div>
</template>
