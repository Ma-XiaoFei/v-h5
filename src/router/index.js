import Vue from 'vue'
import VueRouter from 'vue-router'
import Xiaofei from '../components/Xiaofei.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('@/views/Home.vue'),
    meta:['首页']
  },
  {
    path: '/search',
    name: 'search',
    component: ()=> import('@/views/Search'),
    meta:['搜索']
  },{
    path: '/my',
    name: 'my',
    // component: Home,
    meta:['信息']
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
