<template>
  <div class="NavMenu-wrapper">
    <section class="common_group">
    <el-button type="primary" icon="el-icon-circle-plus-outline">增加监测点</el-button>
    <el-button icon="el-icon-copy-document">导出数据</el-button>
    <el-button icon="el-icon-setting">设置</el-button>
    </section>
    <section class="demo_group">
      <el-button type="danger" icon="el-icon-warning-outline">触发边坡滑动</el-button>
    </section>
  </div>
</template>

<script>
</script>

<style lang="scss">
  .NavMenu-wrapper {
    display: flex;
    justify-content: space-between;
    padding: 10px 80px;

    .demo_group {

    }
  }
</style>
