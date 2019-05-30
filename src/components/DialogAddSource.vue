<template>
  <div class="DialogAddSource-style">
    <p>请输入监测仪器编号：</p>
    <el-input type="text" v-model="id"/>
    <additional-info v-if="in_demo_mode" class="ps">演示模式下无法增加新监测点。</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  export default {
    data() {
      return {
        id:''
      };
    },
    computed: {
      in_demo_mode() {
        return this.$store.state.in_demo_mode;
      }
    },
    methods: {
      handleSubmit() {
        if (this.in_demo_mode) {
          console.warn('处于演示模式，监测点未增加');
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
.DialogAddSource-style {
  p {
    margin: 0 0 10px;
  }

  .ps {
    margin: 10px 0 0;
  }
}
</style>
