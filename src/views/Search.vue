<template>
  <div>
    <iframe
      ref="iframe"
      src="https://www.baidu.com"
      width="100%"
      :height="documentHeight"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  created() {
    this.$toast.loading({
      duration: 0,
      message: "加载中...",
      forbidClick: true
    });
  },
  mounted() {
    console.dir(this.$refs.iframe);
    this.$refs.iframe.onload = (e)=> {
      console.log(e);
      this.$toast.clear()
      
    };
  },
  computed: {
    documentHeight() {
      console.log(document.body.clientHeight);
      return document.documentElement.clientHeight - 50 + "px";
    }
  }
};
</script>

<style>
</style>