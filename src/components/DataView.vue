<template>
  <div class="DataTable-wrapper">
    <h1 v-if="cur_source_id">{{'监测点位 #'+ cur_source_id}}</h1>
    <ve-bar :data="chart_data" height="600px" />
  </div>
</template>

<script>
 // import HistoryData from './HistoryData.vue';

  export default {
    data() {
      return {
        chart_data:{
          columns: ['点位', '位移'],
          rows: [
            { '点位': '1/1', '位移': 1393},
            { '点位': '1/2', '位移': 3530},
            { '点位': '1/3', '位移': 2923},
            { '点位': '1/4', '位移': 1723},
            { '点位': '1/5', '位移': 3792 },
            { '点位': '1/6', '位移': 4593},
            { '点位': '1/1', '位移': -1393},
            { '点位': '1/2', '位移': 3530},
            { '点位': '1/3', '位移': 2923},
            { '点位': '1/4', '位移': 1723},
            { '点位': '1/5', '位移': 3792 },
            { '点位': '1/6', '位移': -4593},
            { '点位': '1/1', '位移': 1393},
            { '点位': '1/2', '位移': 3530},
            { '点位': '1/3', '位移': 2923}
          ]
        }
      }
    },
    computed: {
      cur_source_id() {
        return this.$store.state.cur_source_id;
      }
    },
    components: {

    }
  };
</script>

<style lang="scss">
  .DataTable-wrapper {
    flex: 3;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 5px 5px 10px #999999;
  }
</style>
