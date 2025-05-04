<script setup lang="ts">
import EventService from '@/services/EventService';
import { onMounted, ref } from 'vue';

const props = defineProps<{
	id: string;
}>();

const event = ref<any>(null);

onMounted(() => {
	EventService.getEvent(props.id)
		.then((response: any) => (event.value = response.data))
		.catch((error: any) => console.log(error));
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
