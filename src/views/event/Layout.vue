<script setup lang="ts">
import router from '@/router';
import EventService from '@/services/EventService';
import { onMounted, ref } from 'vue';

const props = defineProps<{
	id: string;
}>();

const event = ref<any>(null);

onMounted(() => {
	EventService.getEvent(props.id)
		.then((response: any) => (event.value = response.data))
		.catch((error: any) => {
			if (error.response && error.response.status === 404) {
				router.push({
					name: '404-resource',
					params: { resource: 'event' },
				});
			} else {
				router.push({ name: 'network-error' });
			}
		});
});
</script>

<template>
	<div v-if="event">
		<h1>{{ event.title }}</h1>
		<div id="nav">
			<RouterLink :to="{ name: 'event-details' }">Details</RouterLink>
			<RouterLink :to="{ name: 'event-register' }">Register</RouterLink>
			<RouterLink :to="{ name: 'event-edit' }">Edit</RouterLink>
		</div>
		<RouterView :event />
	</div>
</template>

<style lang="scss" scoped></style>
