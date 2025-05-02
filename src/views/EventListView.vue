<script setup lang="ts">
import { onMounted, ref } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

const events = ref<any>(null);

onMounted(() => {
	EventService.getEvents()
		.then((response: any) => (events.value = response.data))
		.catch((error: any) => console.log(error));
});
</script>

<template>
	<h1>Events For Good</h1>
	<div class="events">
		<EventCard v-for="event in events" :key="event.id" :event />
	</div>
</template>

<style lang="scss" scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
