<template>
  <div class="MonitorMain-wrapper">
    <map-view />
    <data-table />
  </div>
</template>

<script>
  import MapView from '../components/MapView.vue';
  import DataTable from '../components/DataView.vue';

  export default {
    components: {
      MapView,
      DataTable
    }
  };
</script>

<style>
  .MonitorMain-wrapper {
    flex: 1;
    display: flex;
    box-sizing: border-box;
    padding: 20px 40px 40px;
  }
</style>
