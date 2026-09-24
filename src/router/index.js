import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import AcroDetails from '../views/AcroDetails.vue'



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
  },
  {
    path: '/project/acro',
    name: 'Acro',
    component: AcroDetails
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router