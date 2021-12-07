import Vue from 'vue';
import VueRouter from 'vue-router';
const Home = () => import('../views/home/index.vue');
const About = () => import('../views/about/index.vue');

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		component: About,
	},
];

const router = new VueRouter({
	mode: 'history',
	routes,
});

export default router;
