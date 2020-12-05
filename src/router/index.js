import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'about',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
