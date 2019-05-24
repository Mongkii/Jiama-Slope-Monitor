<template>
  <div class="NavMenu-style">
    <section class="common_group">
    <el-button type="primary" icon="el-icon-circle-plus-outline">增加监测点</el-button>
    <el-button icon="el-icon-copy-document">导出数据</el-button>
    <el-button icon="el-icon-setting">设置</el-button>
    </section>

    <section>
      <div class="switch_wrapper">
        <label for="demo_switch">演示模式</label>
        <el-switch v-model="in_demo_mode" id="demo_switch" />
        <div class="background_mask"></div>
      </div>
      <!--<el-button type="danger" icon="el-icon-warning-outline">触发边坡滑动</el-button>-->
    </section>

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
  .NavMenu-style {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 80px;
    background-color: #fafafa;
  }
</style>
