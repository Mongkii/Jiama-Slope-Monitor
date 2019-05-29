<template>
  <div>
    <label for="collect_input">采集间隔（秒）</label>
    <el-input id="collect_input" type="number" v-model="collect_interval" />
    <label for="update_input">上传间隔（秒）</label>
    <el-input id="update_input" type="number" v-model="update_interval" />
    <el-divider></el-divider>
    <el-radio-group v-model="predict_tag" size="small">
      <el-radio-button :label="refer.SLOPE_NORMAL">平常状态</el-radio-button>
      <el-radio-button :label="refer.SLOPE_EARTHQUAKE">地震状态</el-radio-button>
    </el-radio-group>
    <label for="model_input">神经网络模型文件</label>
    <el-input type="file" id="model_input" />
    <label for="fs_input">边坡稳定系数</label>
    <el-input v-if="predict_tag===refer.SLOPE_NORMAL" type="number" v-model="cur_fs_normal" id="fs_input" />
    <el-input v-else-if="predict_tag===refer.SLOPE_EARTHQUAKE" type="number" v-model="cur_fs_earthquake"
              id="fs_input" />
    <additional-info v-if="in_demo_mode">演示模式下，只有边坡稳定系数会被保存。</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  import { SLOPE_NORMAL, SLOPE_EARTHQUAKE } from '../assets/refer.js';
  import {setFs} from '../store/effect.js';

  export default {
    data() {
      return {
        collect_interval: 5,
        update_interval: 30,
        predict_tag: SLOPE_NORMAL,
        cur_fs_normal: this.$store.state.fs_normal,
        cur_fs_earthquake: this.$store.state.fs_earthquake,
        refer: {
          SLOPE_NORMAL,
          SLOPE_EARTHQUAKE
        }
      };
    },
    computed: {
      in_demo_mode() {
        return this.$store.state.in_demo_mode;
      },
      fs() {
        return 1.5;
      }
    },
    methods: {
      handleSubmit() {
        this.$store.commit(setFs, {
          fs_normal: this.cur_fs_normal,
          fs_earthquake: this.cur_fs_earthquake
        });
      }
    },
    props: {
      submit_fn: {
        type: Function
      }
    },
    components: {
      AdditionalInfo
    },
    mounted() {
      this.$emit('update:submit_fn', this.handleSubmit);
    }
  };
</script>

<style lang="scss">

</style>
