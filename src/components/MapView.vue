<template>
  <div class="MapView-wrapper">
    <h1>监测地图</h1>
    <el-select v-model="cur_area_id" filterable placeholder="请选择监测区域">
      <el-option v-for="item in pit_list" :key="item.id" :label="item.name+'（监测点数：'+item.source.length+'）'" :value="item.id" />
    </el-select>
    <wrapped-map></wrapped-map>
  </div>
</template>

<script>
  import WrappedMap from './WrappedMap.vue';

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
          this.$store.commit('setCurArea', value);
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
  .MapView-wrapper {
    flex: 2;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 10px;
    border-radius: 20px;
    box-shadow: 0 0 20px #cccccc;
    overflow: hidden;
  }
</style>
