<template>
  <div>
    <ve-bar :data="chart_data" :settings="chart_settings" :extend="chart_extend" :legend-visible="false" height="500px" :events="{click:handleClick}" />
    <additional-info>当前各点的实时位移信息</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  const formatData = (data)=>{ // 将数据库内容转换为图表格式
    const l = Object.keys(data).filter(key=>key.startsWith('p')).length+1; // 获取点的数量
    let chart_data_rows = [];
    for (let i=1;i<l;i++) {
      chart_data_rows.push({'point': `#${i}`, 'offset': data[`p${i}`]});
    }
    return chart_data_rows;
  };

  export default {
    data() {
      return {
        chart_settings:{
          labelMap: {
            'point': '点位',
            'offset': '位移'
          },
          digit: 10
        },chart_extend:{
          series: {
            label: {
              normal: {
                show: true
              }
            }
          }
        }
      }
    },
    computed: {
      chart_data() {
        const database = this.$store.state.database;
        const data = database.get('1').getLatest();
        return {
          columns: ['point','offset'],
          rows: formatData(data)
        }
      }
    },
    props:{
      id: {
        type: Number,
        required: true
      }
    },
    methods: {
      handleClick(graph_el) {
        const id = parseInt(graph_el.name.replace('#',''),10);
        this.$emit('update:id',id);
      }
    },
    components:{
      AdditionalInfo
    }
  }
</script>

<style lang="scss">

</style>
