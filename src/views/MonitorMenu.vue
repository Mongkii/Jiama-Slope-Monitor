<template>
  <div class="MonitorMenu-style">
    <section class="common_group">
      <el-button type="primary" icon="el-icon-circle-plus-outline" @click="handleClickItem('DialogAddSource')">增加监测点</el-button>
      <el-button icon="el-icon-copy-document" @click="handleClickItem('DialogExportData')">导出数据</el-button>
      <el-button icon="el-icon-setting" @click="handleClickItem('DialogSettings')">设置</el-button>
    </section>
    <section class="demo_group">
      <div v-if="in_demo_mode" class="test">
        <el-button type="danger" icon="el-icon-warning-outline" @click="handleClickItem('DialogDemoSettings')">演示设置
        </el-button>
      </div>
      <div class="switch_wrapper">
        <span class="switch_label">演示模式</span>
        <el-switch v-model="in_demo_mode" />
      </div>
    </section>
    <el-dialog :visible.sync="dialog_visible" width="30%">
      <component :is="dialog_component" :submit_fn.sync="dialog_submit_fn"></component>
      <span slot="footer">
    <el-button @click="handleCloseDialog">取 消</el-button>
    <el-button type="primary" @click="handleSubmitDialog">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
  import DialogAddSource from '../components/MenuDialog/DialogAddSource.vue';
  import DialogExportData from '../components/MenuDialog/DialogExportData.vue';
  import DialogSettings from '../components/MenuDialog/DialogSettings.vue';
  import DialogDemoSettings from '../components/MenuDialog/DialogDemoSettings.vue';

  import {toggleDemo} from '../store/effect.js';

  const emptyFunction = ()=>{};

  export default {
    data() {
      return {
        dialog_visible: false,
        dialog_component: '',
        dialog_submit_fn: emptyFunction
      };
    },
    computed: {
      in_demo_mode: {
        get() {
          return this.$store.state.in_demo_mode;
        },
        set() {
          this.$store.commit(toggleDemo);
        }
      }
    },
    components: {
      DialogAddSource,
      DialogExportData,
      DialogSettings,
      DialogDemoSettings
    },
    methods: {
      handleClickItem(name) {
        this.dialog_component = name;
        this.dialog_visible = true;
      },
      handleCloseDialog() {
        this.dialog_visible = false;
      },
      handleSubmitDialog() {
        this.dialog_submit_fn();
        this.handleCloseDialog();
      }
    },
    watch: {
      dialog_visible(bool) { // 关闭 dialog 后卸载 dialog 中的组件，以免其保持原来的 state
        if (!bool) {
          this.dialog_component = '';
          this.dialog_submit_fn = emptyFunction;
        }
      }
    }
  };
</script>

<style lang="scss">
  .MonitorMenu-style {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 20px;
    background-color: #fafafa;
    border-radius: 15px;
    box-shadow: 0 0 20px #666666;

    .demo_group > div {
      display: inline-block;
    }

    .switch_wrapper {
      margin-left: 10px;

      .switch_label {
        margin-right: 10px;
      }
    }
  }
</style>
