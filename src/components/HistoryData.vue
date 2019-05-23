<template>
<div>
  <h1>历史数据</h1>
  <el-date-picker v-model="date_range" type="datetimerange" :picker-options="picker_options" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
</div>
</template>

<script>
  export default {
    data() {
      return {
        date_range: '',
        picker_options: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
