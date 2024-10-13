<script lang="ts" setup>
import { navigationMenuTriggerStyle } from './ui/navigation-menu'
</script>

<template>
	<NavigationMenu class="hidden md:block">
		<NavigationMenuList>
			<AuthState>
				<NavigationMenuItem>
					<AuthState v-slot="{ loggedIn }">
						<NavigationMenuLink v-if="loggedIn" as-child>
							<NuxtLink to="/admin" :class="navigationMenuTriggerStyle()">
								Admin
							</NuxtLink>
						</NavigationMenuLink>
					</AuthState>
				</NavigationMenuItem>
			</AuthState>
		</NavigationMenuList>
	</NavigationMenu>
</template>
