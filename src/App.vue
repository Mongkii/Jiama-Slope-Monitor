<template>
  <div id="app">
    <monitor-title />
    <monitor-menu />
    <monitor-main />
  </div>
</template>

<script>
  import MonitorTitle from './views/MonitorTitle.vue';
  import MonitorMenu from './views/MonitorMenu.vue';
  import MonitorMain from './views/MonitorMain.vue';

  export default {
    name: 'app',
    components: {
      MonitorTitle,
      MonitorMenu,
      MonitorMain
    }
  };

  /*
  /// 备忘：
  最后更新于
  数据预警→出现紧急情况时页面如何呈现
  图表加入 MARKLINE?
   */
</script>

<style>
  #app {
    height: 100%;
    padding: 0 50px;
    background: no-repeat linear-gradient(rgba(18, 33, 0, 0.65), rgba(18, 33, 0, 0.65)), url('../public/img/background.jpg') center/cover;
  }

  /* Global Style */
  html, body {
    height: 100%;
    margin: 0;
  }
</style>
