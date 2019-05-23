<template>
  <div>
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
