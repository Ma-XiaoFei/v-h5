import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/static/index.less'
import '@vant/touch-emulator';
Vue.config.productionTip = true;
import vantComponent from '@/components/vant'
Object.values(vantComponent).forEach(v=>{
  Vue.use(v);
})

// 杨若兰
router.beforeEach((to, from , next)=>{
  document.title = to.meta[0];
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
