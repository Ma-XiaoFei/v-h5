<template>
  <div id="app">
    <van-nav-bar
      :title="title"
      left-text
      right-text
      left-arrow
      @click-left="onClickLeft"
    />

   <router-view/>

    <van-tabbar @change="navChange"  border active-color="red" route safe-area-inset-bottom>
      <van-tabbar-item to="/" name="首页" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/search" name="搜索" icon="search">搜索</van-tabbar-item>
      <van-tabbar-item to="/my" name="信息" icon="setting-o">信息</van-tabbar-item>
    </van-tabbar>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: document.title,
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  methods:{
    onClickLeft(){
      this.$router.back();
    },
    navChange(title){
      document.title = title;
      this.title = title;
     
    }
  },
  watch:{
    $route(e){
      this.title = e.meta[0];
    }
  }
};
</script>
<style lang="less">
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
 
// .van-tabbar van-tabbar--fixed {
  
// }
.van-tabbar--fixed{
max-width: 500px !important;
  left: auto !important;
}
.van-icon-arrow-left {
  font-size: 23px !important;
}
</style>
