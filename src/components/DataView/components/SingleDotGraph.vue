<template>
  <div class="SingleDotGraph-style">

    <div class="title_wrapper">
      <el-button icon="el-icon-arrow-left" @click="handleClick" class="return_button"></el-button>
    <h2 class="title_text">埋点 #{{id}} 位移数据</h2>
      <el-date-picker v-model="time_range" type="datetimerange" :picker-options="picker_options" range-separator="至"
                      start-placeholder="开始日期" end-placeholder="结束日期" />
    </div>
    <ve-line :data="chart_data" :settings="chart_settings" :legend-visible="false" height="500px"></ve-line>
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
            'data': '位移'
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
          .search(`p${this.id}`, start_time, end_time);
        return {
          columns: ['time', 'data'],
          rows: data
        };
      }
    },
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
      handleClick() {
        this.$emit('update:id',-1);
      }
    },
    components: {
      AdditionalInfo
    }
  };
</script>

<style lang="scss">
.SingleDotGraph-style {
  .title_wrapper {
    display: flex;
    align-items: center;

    .title_text {
      flex: 1;
      margin: 0;
    }

    .return_button {
      margin-right: 20px;
    }
  }
}
</style>
