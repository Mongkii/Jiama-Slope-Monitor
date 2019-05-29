<template>
  <div class="WrappedMap-style">
    <el-amap vid="'amap'" :center="cur_area.center || [121.503831, 31.283650]" :zoom="13" :plugin="map_plugins">
      <el-amap-polygon :path="cur_area.polygon" :strokeWeight="0" :fillColor="'#ffffff'" :fillOpacity="0.6"/>
      <el-amap-polyline v-for="item in cur_area.source" :path="item.line" :strokeWeight="2" :strokeColor="'#008633'"/>
      <el-amap-marker v-for="item in cur_area.source" :position="item.point" :title="'#'+item.id"
                      :events="{click:()=>handleSetCurSource(item.id)}" />
    </el-amap>
  </div>
</template>

<script>
  import {setCurSource} from '../store/effect.js';

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
      cur_area() {
        return this.$store.state.monitor_areas.find(item => item.id === this.$store.state.cur_area_id) || {};
      }
    },
    methods: {
      handleSetCurSource(id) {
        this.$store.commit(setCurSource,id);
      }
    }
  };
</script>

<style lang="scss">
  .WrappedMap-style {
    flex: 1;
    border-radius: 15px;
    overflow: hidden;
  }
</style>
