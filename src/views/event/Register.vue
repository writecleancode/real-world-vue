<script setup lang="ts">
import { inject } from 'vue';
import { useRouter } from 'vue-router';

const { event } = defineProps<{
	event: any;
}>();

const router = useRouter();
const GStore = inject<any>('GStore');

const register = () => {
	GStore.flashMessage = 'You are successfully registered for ' + event.title;
	setTimeout(() => {
		GStore.flashMessage = '';
	}, 3000);
	router.push({
		name: 'event-details',
	});
};
</script>

<template>
	<p>Register for the event here</p>
	<button @click="register">Register Me!</button>
</template>

<style lang="scss" scoped></style>
