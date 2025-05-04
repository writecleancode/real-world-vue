import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventList.vue';
import EventDetails from '@/views/EventDetails.vue';
import AboutView from '@/views/About.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'event-list',
			component: EventListView,
			props: route => ({ page: parseInt(route.query.page as any) || 1 }),
		},
		{
			path: '/event/:id',
			name: 'event-details',
			props: true,
			component: EventDetails,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutView,
		},
	],
});

export default router;
