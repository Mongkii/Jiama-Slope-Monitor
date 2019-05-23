<template>
  <div class="NavTitle-wrapper">
    <h1 class="title"><img>边坡稳定监测预警系统</h1>
    <label for="demo_switch">测试模式</label>
    <el-switch v-model="in_demo_mode" id="demo_switch" />
  </div>
</template>

<script>
  export default {
    computed: {
      in_demo_mode: {
        get() {
          return this.$store.state.in_demo_mode;
        },
        set() {
          this.$store.commit('toggleDemo');
        }
      }
    }
  };
</script>

<style lang="scss">
  .NavTitle-wrapper {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 10px 80px;
    background-color: #ffffff;
    box-shadow: 0 0 5px #666666;

    .title {
      flex: 1;
      margin: 0;
      text-align: left;
    }
  }
</style>
