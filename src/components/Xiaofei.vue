<template>
  <div @click="fn">
    <div style="color: red">{{this.$store.state.num}}num</div>
  </div>
</template>

<script>
export default {
  methods:{
    fn(){
      // setTimeout(()=>{
      this.$store.commit('add')

      // },1000)
    }
  },
  beforeDestroy(){
     this.$store.commit('add', 0)
  }

};
</script>

<style>
</style>