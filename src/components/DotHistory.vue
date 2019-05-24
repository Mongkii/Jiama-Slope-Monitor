<template>
  <div>
    <h1>点位 # 位移数据</h1>
    <el-button icon="el-icon-arrow-left">返回</el-button>
    <el-date-picker v-model="date_range" type="datetimerange" :picker-options="picker_options" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" />
    <ve-line :data="chart_data" height="500px" ></ve-line>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        chart_data:{
          columns: ['日期', '边坡稳定系数'],
          rows: [
            { '日期': '1/1', '边坡稳定系数': 1.393},
            { '日期': '1/2', '边坡稳定系数': 3.530},
            { '日期': '1/3', '边坡稳定系数': 2.923},
            { '日期': '1/4', '边坡稳定系数': 1.723},
            { '日期': '1/5', '边坡稳定系数': 3.792},
            { '日期': '1/6', '边坡稳定系数': 4.593},
            { '日期': '1/1', '边坡稳定系数': 1.393},
            { '日期': '1/2', '边坡稳定系数': 3.530},
            { '日期': '1/3', '边坡稳定系数': 2.923},
            { '日期': '1/4', '边坡稳定系数': 1.723},
            { '日期': '1/5', '边坡稳定系数': 3.792},
            { '日期': '1/6', '边坡稳定系数': 4.593},
            { '日期': '1/1', '边坡稳定系数': 1.393},
            { '日期': '1/2', '边坡稳定系数': 3.530},
            { '日期': '1/3', '边坡稳定系数': 2.923}
          ]
        },
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
