<template>
  <div id="app">
    <monitor-nav />
    <monitor-main />
  </div>
</template>

<script>
  import MonitorMain from './views/MonitorMain.vue';
  import MonitorNav from './views/MonitorNav.vue';

  export default {
    name: 'app',
    components: {
      MonitorMain,
      MonitorNav,
    }
  };
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  /* Global Style */
  html, body {
    height: 100%;
    margin: 0;
  }
</style>
