<template>
  <div class="SlopeData-style">
    <div class="time_picker_wrapper">
      <el-date-picker v-model="time_range" type="datetimerange" :picker-options="picker_options" range-separator="至"
                      start-placeholder="开始日期" end-placeholder="结束日期" />
    </div>
    <ve-line :data="chart_data" :settings="chart_settings" :visual-map="chart_visualMap" :legend-visible="false" height="500px"></ve-line>
    <additional-info>默认显示最近 24 小时数据。</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from '../../common/AdditionalInfo.vue';

  export default {
    data() {
      return {
        chart_settings: {
          labelMap: {
            'time': '时间',
            'data': '边坡稳定系数'
          },
          scale: [true, true],
          digit: 10
        },
        time_range: [,],
        picker_options: {
          shortcuts: [{
            text: '最近六小时',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 6);
              picker.$emit('pick', [start, end]);
            }
          }, {
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
      };
    },
    computed: {
      chart_data() {
        const database = this.$store.state.database;
        const [start_time, end_time] = (this.time_range[0] && this.time_range[1]) ? this.time_range : [Date.now() - 24 * 60 * 60 * 1000, Date.now()];
        const data = database.get('1')
          .search('fs', start_time, end_time);
        return {
          columns: ['time', 'data'],
          rows: data
        };
      },
      warn_limit() {
        return this.$store.state.warn_limit;
      },
      danger_limit() {
        return this.$store.state.danger_limit;
      },
      chart_visualMap() {
        return [{
          type: 'piecewise',
          splitNumber: 3,
          min: this.danger_limit,
          max: this.warn_limit,
          inRange: {
            color:['#ffa500']
          },
          outOfRange: {
            color:['#dc143c','#60d0b0']
          },
          show:false
        }]
      },
    },
    components: {
      AdditionalInfo
    }
  };
</script>

<style lang="scss">
  .SlopeData-style {
    .time_picker_wrapper {
      text-align: right;
    }
  }
</style>
