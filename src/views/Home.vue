<template>
  <div class="home">
    <div>
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>

      <van-grid :clickable="true">
        <van-grid-item icon="photo-o" text="文字" />
        <van-grid-item icon="photo-o" text="图片" />
        <van-grid-item icon="photo-o" text="信息" />
        <van-grid-item icon="photo-o" text="搜索" />
      </van-grid>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      images: [
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583583888976&di=146f6c19dd550655fd80db87b11e8300&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201512%2F25%2F20151225170528_Sf8Ma.jpeg",
        "https://img95.699pic.com/photo/50055/5642.jpg_wh860.jpg",
        "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583583888975&di=1a6dced4b9066ff238e6069d3cb4fd2c&imgtype=0&src=http%3A%2F%2Fimg13.weikeimg.com%2Fdata%2Fuploads%2F2016%2F11%2F28%2F1624794157583ba2832b263.jpg",
        "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2920814812,107018119&fm=26&gp=0.jpg",
        "https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1035415831,1465727770&fm=26&gp=0.jpg"
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
  height: 130px;
  // padding: 30px 60px;
  // padding: 0 0 5px;
  background-color: #fff;
  pointer-events: none;
}
</style>
