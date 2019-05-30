<template>
  <div class="DialogSettings-style">
    <h2>仪器参数设置</h2>
    <div class="input_with_label">
      <label for="collect_input">采集间隔（秒）</label>
      <el-input id="collect_input" type="number" v-model="collect_interval" class="input" @focus="handleFocus"/>
    </div>
    <div class="input_with_label">
      <label for="update_input">上传间隔（秒）</label>
      <el-input id="update_input" type="number" v-model="update_interval" class="input" @focus="handleFocus"/>
    </div>
    <el-divider></el-divider>
    <h2>神经网络设置</h2>
    <!--
    <el-radio-group v-model="predict_tag" size="small">
      <el-radio-button :label="refer.SLOPE_NORMAL">平常状态</el-radio-button>
      <el-radio-button :label="refer.SLOPE_EARTHQUAKE">地震状态</el-radio-button>
    </el-radio-group>
    -->
    <h3>更改神经网络模型</h3>
    <el-input type="file" id="model_input">
      <el-select v-model="predict_tag" slot="prepend" placeholder="请选择">
        <el-option label="平常状态" :value="refer.SLOPE_NORMAL"></el-option>
        <el-option label="地震状态" :value="refer.SLOPE_EARTHQUAKE"></el-option>
      </el-select>

    </el-input>
    <!--
    <label for="fs_input">边坡稳定系数</label>
    <el-input v-if="predict_tag===refer.SLOPE_NORMAL" type="number" v-model="cur_fs_normal" id="fs_input" />
    <el-input v-else-if="predict_tag===refer.SLOPE_EARTHQUAKE" type="number" v-model="cur_fs_earthquake"
              id="fs_input" />
    -->
    <el-divider></el-divider>
    <additional-info v-if="in_demo_mode">演示模式下，修改不会被保存。</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from '../common/AdditionalInfo.vue';

  import { SLOPE_NORMAL, SLOPE_EARTHQUAKE } from '../../assets/refer.js';
  // import {setFs} from '../store/effect.js';

  export default {
    data() {
      return {
        collect_interval: 5,
        update_interval: 30,
        predict_tag: SLOPE_NORMAL,
        /*
        cur_fs_normal: this.$store.state.fs_normal,
        cur_fs_earthquake: this.$store.state.fs_earthquake,
         */
        refer: {
          SLOPE_NORMAL,
          SLOPE_EARTHQUAKE
        }
      };
    },
    computed: {
      in_demo_mode() {
        return this.$store.state.in_demo_mode;
      }
    },
    methods: {
      handleFocus(e) {
        e.target.select();
      },
      handleSubmit() {
        if (this.in_demo_mode) {
          /*
          this.$store.commit(setFs, {
            fs_normal: this.cur_fs_normal,
            fs_earthquake: this.cur_fs_earthquake
          });
           */
          console.warn('演示模式下，对设置的修改不会被保存。');
        } else {
          /* 与服务器对接的语句 */
        }
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
  .DialogSettings-style {
    h2 {
      margin: 0 0 10px;
    }

    h3 {
      margin: 0 0 5px;
    }

    .input_with_label {
      margin-bottom: 10px;

      label {
        margin-right: 10px;
      }

      .input {
        width: 50%;
      }
    }

    #model_input {
      color: transparent;
    }

    .el-select .el-input {
      width: 120px;
    }
  }

</style>
