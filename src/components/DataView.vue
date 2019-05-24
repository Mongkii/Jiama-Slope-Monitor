<template>
  <div class="DataView-wrapper">
    <h1 v-if="cur_source_id">{{'监测点位 #'+ cur_source_id}}</h1>
    <el-tabs v-model="cur_page" @tab-click="handleClick">
      <el-tab-pane label="各点位移数据" name="DotsData"></el-tab-pane>
      <el-tab-pane label="边坡稳定系数" name="SlopeData"></el-tab-pane>
      <el-tab-pane label="Test" name="DotHistory"></el-tab-pane>
    </el-tabs>
    <component :is="cur_page"></component> <!-- 如果写在 el-tab-pane 标签里，除非 resize 页面，不然表格无法加载-->
  </div>
</template>

<script>
  import DotsData from './DotsData.vue';
 import SlopeData from './SlopeData.vue';
 import DotHistory from './DotHistory.vue';

  export default {
    data() {
      return {
        cur_page:'DotsData'
      }
    },
    computed: {
      cur_source_id() {
        return this.$store.state.cur_source_id;
      }
    },
    components: {
      DotsData,
      SlopeData,
      DotHistory
    },
    methods: {
      handleClick() {
        // alert('clicked');
      }
    }
  };
</script>

<style lang="scss">
  .DataView-wrapper {
    flex: 3;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 20px #cccccc;
    overflow: scroll;
  }
</style>
