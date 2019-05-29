<template>
  <div>
    <span>请选择要导出数据的时间范围：</span>
    <el-date-picker v-model="time_range" type="datetimerange" :picker-options="picker_options" range-separator="至"
                    start-placeholder="开始日期" end-placeholder="结束日期" />
    <additional-info>数据将保存为 CSV 格式</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  import { convertNumToDateString } from '../methods/assistFunctions.js';

  const downloadCSV = data => {
    const a = document.createElement('a');
    a.href = `data:text/csv,${encodeURIComponent(data)}`;
    a.download = 'Export.csv';
    a.click();
  };

  export default {
    data() {
      return {
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
      cur_database() {
        return this.$store.state.database.get('1');
      }
    },
    components: {
      AdditionalInfo
    },
    methods: {
      handleSubmit() {
        const [start_time, end_time] = this.time_range;
        if (this.cur_database && start_time && end_time) {
          const raw_data = this.cur_database.export(start_time, end_time);
          const point_count = Object.keys(raw_data[0])
            .filter(key => key.startsWith('p')).length;
          let thead = 'Time,';
          for (let i = 1; i < point_count + 1; i++) {
            thead += `Plot #${i},`;
          }
          thead += 'Fs';
          const tbody = raw_data.map(item => {
              let arr = [];
              arr.push(convertNumToDateString(item.time));
              for (let i = 1; i < point_count + 1; i++) {
                arr[i] = item[`p${i}`];
              }
              arr.push(item.fs);
              return arr.join(',');
            }
          );
          const data = [thead].concat(tbody)
            .join('\n');
          downloadCSV(data);
        }
      }
    },
    props: {
      submit_fn: {
        type: Function
      }
    },
    mounted() {
      this.$emit('update:submit_fn', this.handleSubmit);
    }
  };
</script>

<style lang="scss">

</style>
