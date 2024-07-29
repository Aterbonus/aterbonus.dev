<script lang="ts" setup>
import { navigationMenuTriggerStyle } from './ui/navigation-menu'

const isDark = useDark()
const { logout } = useAuthStore()
</script>

<template>
	<header class="border-b">
		<div class="flex gap-3 py-3 container">
			<NuxtLink to="/" class="text-5 font-bold leading-none transition-color hover:text-primary">
				Ater
			</NuxtLink>
			<button type="button" class="ml-auto leading-none" title="Cambio de tema">
				<UnoIcon class="i-fxemoji-sunwithface dark:i-fxemoji-newmoonwithface" @click="isDark = !isDark" />
			</button>
			<AuthState v-slot="{ loggedIn }">
				<button v-if="loggedIn" class="leading-none transition-color hover:text-primary" @click="logout">
					Logout
				</button>
			</AuthState>
		</div>
	</header>
</template>
