<template>
  <div class="DataView-style">
    <div v-if="cur_source_id">
      <div class="title">
      <h1>{{'监测点位 #'+ cur_source_id}}</h1>
        <danger-indicator :status="slope_status"/>
        <span class="update_info">最后更新于：{{update_time}}</span>
      </div>
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
  import DangerIndicator from './components/DangerIndicator.vue';
  import DotsData from './components/DotsData.vue';
  import SlopeData from './components/SlopeData.vue';

  import {STATUS_SAFE,STATUS_WARN,STATUS_DANGER} from '../../assets/refer.js';

  export default {
    data() {
      return {
        cur_page: 'DotsData'
      };
    },
    computed: {
      cur_source_id() {
        return this.$store.state.cur_source_id;
      },
      latest_data() {
        return this.$store.state.database.get(this.cur_source_id).getLatest();
      },
      update_time() {
        return new Date(this.latest_data.time).toLocaleString();
      },
      warn_limit() {
        return this.$store.state.warn_limit;
      },
      danger_limit() {
        return this.$store.state.danger_limit;
      },
      slope_status() {
        const fs = this.latest_data.fs;
        if (fs>this.warn_limit) {
          return STATUS_SAFE;
        } else if (fs>this.danger_limit) {
          return STATUS_WARN;
        } else {
          return STATUS_DANGER;
        }
      }
    },
    components: {
      DangerIndicator,
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
      margin-bottom: 10px;

      h1 {
        margin: 0;
      }

      * {
        display: inline-block;
      }
      .update_info {
        margin-left: 20px;
        color: #666666;
        font-size: 90%;
      }
    }
  }
</style>
