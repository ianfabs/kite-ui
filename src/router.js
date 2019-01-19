import Vue from 'vue'
import Router from 'vue-router'
import Editor from './views/Editor.vue'
import Login from './views/Login.vue'
import Containers from './views/Dashboard/Containers.vue'

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
      path: '/editor',
      name: 'editor',
      component: Editor
    },
    {
      path: '/containers',
      name: 'containers',
      component: Containers
    },
    {
      path: '/help',
      name: 'help',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Help.vue')
    }
  ]
})
