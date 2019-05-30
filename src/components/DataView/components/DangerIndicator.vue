<template>
<i :class="['DangerIndicator-style'].concat(getStatusClass())"></i>
</template>

<script>
  import {STATUS_SAFE,STATUS_WARN,STATUS_DANGER} from '../../../assets/refer.js';

  export default {
    props:{
      status:{
        type: String,
        required: true
      }
    },methods:{
      getStatusClass() {
        switch (this.status) {
          case STATUS_SAFE:
            return ['el-icon-success','safe'];
          case STATUS_WARN:
            return ['el-icon-warning','warn'];
          case STATUS_DANGER:
            return ['el-icon-error','danger'];
          default:
            return;
        }
      }
    }
  }
</script>

<style lang="scss">
  .DangerIndicator-style {
    margin-left: 10px;
    font-size: 2rem;

    &.safe {
      color: #60d0b0;
    }
    &.warn {
      color: #ffa500;
    }
    &.danger {
      color: #dc143c;
    }
  }
</style>
