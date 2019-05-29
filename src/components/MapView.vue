<template>
  <div class="MapView-style">
    <div class="title_wrapper">
      <h1 class="title">监测地图</h1>
      <el-select v-model="cur_area_id" filterable placeholder="请选择监测区域" class="select_box">
        <el-option v-for="item in pit_list" :key="item.id" :label="item.name+'（监测点数：'+item.source.length+'）'"
                   :value="item.id" />
      </el-select>
    </div>
    <wrapped-map></wrapped-map>
  </div>
</template>

<script>
  import WrappedMap from './WrappedMap.vue';

  import {setCurArea} from '../store/effect.js';

  export default {
    data() {
      return {};
    },
    computed: {
      cur_area_id: {
        get() {
          return this.$store.state.cur_area_id;
        },
        set(value) {
          this.$store.commit(setCurArea, value);
        }
      },
      pit_list() {
        return this.$store.state.monitor_areas;
      }
    },
    components: {
      WrappedMap
    }
  };
</script>

<style lang="scss">
  .MapView-style {
    display: flex;
    flex-direction: column;
    width: calc(40% - 20px);
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 0 20px #666666;
    overflow: hidden;
    background-color: #ffffff;
    box-sizing: border-box;

    .title_wrapper {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin: 0 0 10px 0;

      .title {
        flex: 1;
        margin: 0;
      }
    }
  }
</style>
