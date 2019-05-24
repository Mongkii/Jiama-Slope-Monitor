<template>
  <div id="app">
    <monitor-nav />
    <monitor-main />
  </div>
</template>

<script>
  import MonitorMain from './views/MonitorMain.vue';
  import MonitorNav from './views/MonitorNav.vue';

  let demo_data_timer;

  export default {
    name: 'app',
    components: {
      MonitorMain,
      MonitorNav,
    },
    mounted() {
      const handleRefreshDatabase = () => {
        this.$store.commit('refreshDatabase');
      };
      demo_data_timer = setInterval(handleRefreshDatabase, 5000);
    },
    destroyed() {
      clearInterval(demo_data_timer);
    }
  };
</script>

<style>
  #app {
    height: 100%;
  }

  /* Global Style */
  html, body {
    height: 100%;
    margin: 0;
  }
</style>
