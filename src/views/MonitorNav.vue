<template>
  <div class="MonitorNav-style">
    <nav-title />
    <nav-menu />
  </div>
</template>

<script>
  import NavTitle from '../components/NavTitle.vue';
  import NavMenu from '../components/NavMenu.vue';

  export default {
    components: {
      NavTitle,
      NavMenu
    }
  };
</script>

<style lang="scss">
  .MonitorNav-style {
    box-shadow: 0 0 10px #999999;
  }
</style>
