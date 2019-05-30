<template>
  <div class="MonitorMain-style">
    <map-view />
    <data-view />
  </div>
</template>

<script>
  import MapView from '../components/MapView';
  import DataView from '../components/DataView';

  import {generateManyData} from '../methods/generateDemoData.js';
  import {getFs} from '../methods/assistFunctions.js';
  import {loadModel} from '../store/effect.js';

  export default {
    computed:{
      model() {
        return this.$store.state.model;
      }
    },
    components: {
      MapView,
      DataView
    },
    mounted() {
      this.$store.dispatch(loadModel);
    },
    watch: {
      model(cur_val, prev_val) {
        if (prev_val===undefined) {
          const database = this.$store.state.database.get('1');
          const fs = getFs(this.$store.state.model_type, this.$store.state);
          generateManyData(database,undefined,fs,this.model,this.$store.commit);
        }
      }
    }
  };
</script>

<style>
  .MonitorMain-style {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: calc(100% - 140px); /* 使该组件占满屏幕的竖向剩余空间。使用 calc 而非 flex，是因为 flex 样式无法跟随窗口大小变化自动调整高度，不知道为什么 */
    padding: 40px 0;
  }
</style>
