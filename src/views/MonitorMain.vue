<template>
  <div class="MonitorMain-style">
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
  .MonitorMain-style {
    display: flex;
    box-sizing: border-box;
    height: calc(100% - 125px);
    padding: 20px 40px 40px;
  }
</style>
