<template>
  <div class="DataView-style">
    <div v-if="cur_source_id">
      <h1 class="title">{{'监测点位 #'+ cur_source_id}}</h1>
      <el-tabs v-model="cur_page">
        <el-tab-pane label="各点位移数据" name="DotsData"></el-tab-pane>
        <el-tab-pane label="边坡稳定系数" name="SlopeData"></el-tab-pane>
      </el-tabs>
      <component :is="cur_page"></component> <!-- 如果写在 el-tab-pane 标签里，除非 resize 页面，不然表格无法加载-->
    </div>
    <div v-else class="no_content">
      <div>
        <i class="el-icon-warning warning_icon"></i>
        监测信息将在选择点位后显示。
        <br>
        请从左侧地图选择监测点位。
      </div>
    </div>
  </div>
</template>

<script>
  import DotsData from './DotsData.vue';
  import SlopeData from './SlopeData.vue';

  export default {
    data() {
      return {
        cur_page: 'DotsData'
      };
    },
    computed: {
      cur_source_id() {
        return this.$store.state.cur_source_id;
      }
    },
    components: {
      DotsData,
      SlopeData
    }
  };
</script>

<style lang="scss">
  .DataView-style {
    width: calc(60% - 20px);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 20px #666666;
    overflow: scroll;
    background-color: #ffffff;
    box-sizing: border-box;

    .no_content {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #aaaaaa;
      text-align: center;
      line-height: 2em;

      .warning_icon {
        display: block;
        font-size: 300%;
        margin-bottom: 10px;
      }
    }

    .title {
      margin: 0 0 10px 0;
    }
  }
</style>
