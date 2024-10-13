<script lang="ts" setup>
const isDark = useDark()
const { logout } = useAuthStore()
</script>

<template>
	<header class="border-b bg-background">
		<div class="grid grid-cols-2 items-center gap-3 py-2 container md:(grid-cols-[1fr_auto_1fr] py-2)">
			<NuxtLink to="/" class="text-5 font-bold leading-none transition-color hover:text-primary">
				Ater
			</NuxtLink>
			<Navigation />
			<div class="hidden items-center gap-3 md:flex">
				<button type="button" class="ml-auto leading-none" title="Cambio de tema">
					<UnoIcon class="i-fxemoji-sunwithface dark:i-fxemoji-newmoonwithface" @click="isDark = !isDark" />
				</button>
				<AuthState v-slot="{ loggedIn }">
					<button v-if="loggedIn" class="leading-none transition-color hover:text-primary" @click="logout">
						Logout
					</button>
				</AuthState>
			</div>
			<div class="flex md:hidden">
				<Sheet>
					<SheetTrigger as-child>
						<Button class="ml-auto" variant="outline">
							<UnoIcon class="i-fxemoji-hamburger" />
						</Button>
					</SheetTrigger>
					<SheetContent side="left" class="grid grid-rows-[auto_1fr_auto]">
						<SheetHeader class="mb-10">
							<SheetTitle>Navegación</SheetTitle>
						</SheetHeader>
						<nav class="flex flex-col gap-3">
							<NuxtLink to="/" class="text-lg font-bold">
								No hay nada aquí
							</NuxtLink>
							<AuthState v-slot="{ loggedIn }">
								<NuxtLink v-if="loggedIn" to="/admin" class="text-lg font-bold">
									Admin
								</NuxtLink>
							</AuthState>
						</nav>
						<SheetFooter class="mt-auto">
							<AuthState v-slot="{ loggedIn }">
								<Button v-if="loggedIn" class="text-lg leading-none transition-color hover:text-primary" @click="logout">
									Logout
								</Button>
							</AuthState>
						</SheetFooter>
					</SheetContent>
				</Sheet>
			</div>
		</div>
	</header>
</template>
