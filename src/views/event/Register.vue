<script setup lang="ts">
import { useRouter } from 'vue-router';

const props = defineProps<{
	event: any;
}>();

const router = useRouter();

const register = () => {
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
