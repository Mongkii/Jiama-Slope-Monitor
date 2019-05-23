<template>
  <div class="MapView-wrapper">
    <h1>监测地图</h1>
    <el-select v-model="cur_area_id" filterable placeholder="请选择监测区域">
      <el-option v-for="item in pit_list" :key="item.id" :label="item.name" :value="item.id" />
    </el-select>
    <div class="map_wrapper">
      <el-amap vid="'map_view'" :center="cur_area.center || [121.503831, 31.283650]" :zoom="13" :plugin="map_plugins">
        <el-amap-polygon
          :path="cur_area.polygon" />
        <el-amap-polyline v-for="item in cur_area.source" :path="item.line" />
        <el-amap-marker v-for="item in cur_area.source" :position="item.point" :title="'#'+item.id"
                        :events="{click:()=>handleSetCurSource(item.id)}"/>
      </el-amap>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        map_plugins: [{
          pName: 'MapType',
          defaultType: 1
        }, {
          pName: 'ToolBar'
        }]
      };
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
      cur_area() {
        return this.$store.state.monitor_areas.find(item => item.id === this.$store.state.cur_area_id) || {};
      },
      pit_list() {
        return this.$store.state.monitor_areas;
      }
    },
    methods: {
      handleSetCurSource(id) {
        this.$store.commit('setCurSource',id);
      }
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
    box-shadow: 5px 5px 10px #999999;
    overflow: hidden;

    .map_wrapper {
      flex: 1;
      border-radius: 15px;
      overflow: hidden;
    }
  }
</style>
