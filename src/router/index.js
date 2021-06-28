import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/overview',
    name: 'overview',
    component: () => import(/* webpackChunkName: "about" */ '../views/overview.vue')
  },
  {
    path: '/casescreen',
    name: 'caseScreen',
    component: () => import(/* webpackChunkName: "about" */ '../views/caseScreen.vue')
  },
  {
    path: '/criminalscreen',
    name: 'criminalscreen',
    component: () => import(/* webpackChunkName: "about" */ '../views/criminalscreen.vue')
  },
  {
    path: '/assignment',
    name: 'assignment',
    component: () => import(/* webpackChunkName: "about" */ '../views/assignment.vue')
  },
  {
    path: '/opencase',
    name: 'opencase',
    component: () => import(/* webpackChunkName: "about" */ '../views/opencase.vue')
  },
  {
    path: '/assignmentdo',
    name: 'assignmentdo',
    component: () => import(/* webpackChunkName: "about" */ '../views/assignmentdo.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/settings.vue')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import(/* webpackChunkName: "about" */ '../views/report.vue')
  },
  {
    path: '/fullcrimeoverview/:id',
    name: 'fullcrimeoverview',
    component: () => import(/* webpackChunkName: "about" */ '../views/fullcrimeoverview.vue')
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
