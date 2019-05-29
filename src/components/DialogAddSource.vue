<template>
  <div>
    请输入监测仪器编号：
    <el-input type="text" v-model="id"/>
    <additional-info v-if="in_demo_mode">演示模式下无法增加新监测点。</additional-info>
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

</style>
