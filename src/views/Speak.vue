<template>
  <div class="speak">
    <div id="SOHUCS" sid="index"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const { cookie } = document;
    if (!cookie.includes('isReload')) {
      window.location.reload();
      document.cookie = 'isReload=true; max-age=1';
    }
  },
};
</script>

<style lang="less" scoped>
.speak {
  background: #fff;
  border-radius: 4px;
  min-height: calc(100vh - 410px);
  padding: 0 4% 60px;
  margin-top: 20px;
}
</style>
