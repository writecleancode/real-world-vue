<script setup lang="ts">
import { inject } from 'vue';

const GStore = inject<any>('GStore');
</script>

<template>
	<div id="layout">
		<div id="flash-message" v-if="GStore.flashMessage">{{ GStore.flashMessage }}</div>
		<header>
			<div class="wrapper">
				<nav>
					<RouterLink :to="{ name: 'event-list' }">Home</RouterLink> |
					<RouterLink :to="{ name: 'about' }">About</RouterLink>
				</nav>
			</div>
		</header>
		<RouterView />
	</div>
</template>

<style>
@keyframes yellowfade {
	from {
		background: yellow;
	}
	to {
		background: transparent;
	}
}

#flash-message {
	padding: 8px 16px;
	animation-name: yellowfade;
	animation-duration: 3s;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}

h4 {
	font-size: 20px;
}
</style>
