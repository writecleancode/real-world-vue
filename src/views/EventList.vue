<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import EventCard from '@/components/EventCard.vue';
import EventService from '@/services/EventService';

const props = defineProps<{
	page: number;
}>();

const events = ref<any>(null);
const totalEvents = ref(0);

const hasNextPage = computed(() => {
	const totalPages = Math.ceil(totalEvents.value / 2);
	return props.page < totalPages;
});

const fetchEvents = () => {
	EventService.getEvents(2, props.page)
		.then((response: any) => {
			events.value = response.data;
			totalEvents.value = response.headers['x-total-count'];
		})
		.catch((error: any) => console.log(error));
};

onMounted(() => {
	fetchEvents();
});

watch(
	() => props.page,
	() => {
		events.value = null;
		fetchEvents();
	}
);
</script>

<template>
	<h1>Events For Good</h1>
	<div class="events">
		<EventCard v-for="event in events" :key="event.id" :event />
		<div class="pagination">
			<RouterLink v-if="page != 1" :to="{ name: 'event-list', query: { page: page - 1 } }" id="page-prev" rel="prev">
				&#60; Previous
			</RouterLink>
			<RouterLink v-if="hasNextPage" :to="{ name: 'event-list', query: { page: page + 1 } }" id="page-next" rel="next">
				Next &#62;
			</RouterLink>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.events {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.pagination {
	display: flex;
	width: 290px;
}

.pagination a {
	flex: 1;
	text-decoration: none;
	color: #2c3e50;
}

#page-prev {
	text-align: left;
}

#page-next {
	text-align: right;
}
</style>
