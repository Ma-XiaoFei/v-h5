import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 1
  },
  mutations: {
    add(a, num){
      console.log(a, 'mutations')
     console.log(num)
     if (num !== undefined){
        this.state.num = 0
        return;
     }
      this.state.num ++;
      document.title = a.num
    }
  },
  actions: {
    add(a){
      console.log(a)
      console.log(this, 'this')
      this.commit('add')
    }
  },
  modules: {
  }
})
