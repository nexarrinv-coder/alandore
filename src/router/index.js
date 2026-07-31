import { createRouter, createWebHistory } from 'vue-router'

import HomeRoute from './HomeRoute.vue'
import AboutUsRoute from './AboutUsRoute.vue'
import BlogsRoute from './BlogsRoute.vue'
import ABlogRoute from './ABlogRoute.vue'
import NotFoundRoute from './NotFoundRoute.vue'
import DepartmentsRoute from './DepartmentsRoute.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomeRoute
    },{
      name: 'about',
      component: AboutUsRoute,
      path: '/about'
    },{
      name: 'blogs',
      component: BlogsRoute,
      path: '/blogs'
    },{
      name: 'blog',
      component: ABlogRoute,
      path: '/blog/:slug'
    },{
      name: 'notfound',
      component: NotFoundRoute,
      path: '/:pathMatch(.*)*'
    },{
      name: 'departments',
      component: DepartmentsRoute,
      path: '/departments'
    }
  ],
})

export default router
