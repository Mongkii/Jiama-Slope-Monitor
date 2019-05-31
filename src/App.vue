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
</script>

<style>
  #app {
    height: 100%;
    padding: 0 50px;
    background: no-repeat linear-gradient(rgba(18, 33, 0, 0.65), rgba(18, 33, 0, 0.65)), url('/image/background.jpg') center/cover;
  }

  /* Global Style */
  html, body {
    height: 100%;
    margin: 0;
  }
</style>
