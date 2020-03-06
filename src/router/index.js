import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xiaofei from '../components/Xiaofei.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children:[
      {path: 'xiaofei', component: Xiaofei}
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
