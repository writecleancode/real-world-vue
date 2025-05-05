import { createRouter, createWebHistory } from 'vue-router';
import EventListView from '../views/EventList.vue';
import EventLayout from '@/views/event/Layout.vue';
import EventDetails from '@/views/event/Details.vue';
import EventRegister from '@/views/event/Register.vue';
import EventEdit from '@/views/event/Edit.vue';
import AboutView from '@/views/About.vue';
import NotFound from '@/views/event/NotFound.vue';
import NetworkError from '@/views/NetworkError.vue';

const routes = [
	{
		path: '/',
		name: 'event-list',
		component: EventListView,
		props: (route: any) => ({ page: parseInt(route.query.page as any) || 1 }),
	},
	{
		path: '/events/:id',
		name: 'event-layout',
		props: true,
		component: EventLayout,
		children: [
			{
				path: '',
				name: 'event-details',
				component: EventDetails,
			},
			{
				path: 'register',
				name: 'event-register',
				component: EventRegister,
			},
			{
				path: 'edit',
				name: 'event-edit',
				component: EventEdit,
			},
		],
	},
	{
		path: '/event/:afterEvent(.*)',
		redirect: (to: any) => {
			return { path: 'events/' + to.params.afterEvent };
		},
	},
	{
		path: '/about-us',
		name: 'about',
		component: AboutView,
	},
	{
		path: '/about',
		redirect: { name: 'about' },
	},
	{
		path: '/404/:resource',
		name: '404-resource',
		component: NotFound,
		props: true,
	},
	{
		path: '/:catchAll(.*)',
		name: 'not-found',
		component: NotFound,
	},
	{
		path: '/network-error',
		name: 'network-error',
		component: NetworkError,
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0 };
		}
	},
});

export default router;
