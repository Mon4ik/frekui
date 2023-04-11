import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import DocsView from "@/views/DocsView.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: HomeView
	},
	{
		path: '/about',
		name: 'about',
		component: AboutView
	},
	{
		path: '/docs',
		name: 'docs',
		redirect: { name: "docs_viewer", params: { file: "installation" }}
	},
	{
		path: '/docs/:file',
		name: 'docs_viewer',
		component: DocsView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
