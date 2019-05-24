<template>
  <div>
    <el-date-picker v-model="time_range" type="datetimerange" :picker-options="picker_options" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
    <ve-line :data="chart_data" :settings="chart_settings" height="500px" ></ve-line>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chart_settings:{
          labelMap: {
            'time': '时间',
            'data': '边坡稳定系数'
          },
          scale:[true,true]
        },
        time_range: [,],
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
    },
    computed: {
      chart_data() {
        const database = this.$store.state.database;
        const [start_time, end_time] = (this.time_range[0] && this.time_range[1])?this.time_range:[Date.now()-24*60*60*1000, Date.now()];
        const data = database.get('1').search('fs',start_time,end_time);
        return {
          columns: ['time', 'data'],
          rows: data
        }
      }
    }
  }
</script>

<style lang="scss">

</style>
