import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/project/wms',
    name: 'WMS',
    component: ProjectDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router