<template>
  <div class="home">
    <div>
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy='image' />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
       images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg"
      ]
    };
  },
  components: {}
};
</script>


<style lang="less" scoped>
.van-swipe img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    padding: 30px 60px;
    background-color: #fff;
    pointer-events: none;
}
</style>
