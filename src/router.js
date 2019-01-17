import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Containers from './views/Dashboard/Containers.vue'
//import Editor from './views/Editor.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/containers',
      name: 'containers',
      component: Containers
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import(/* webpackChunkName: "editor" */ './views/Editor.vue')
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    }
  ]
})
