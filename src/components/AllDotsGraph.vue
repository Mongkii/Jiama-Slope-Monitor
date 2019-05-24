<template>
  <div>
    <ve-bar :data="chart_data" :settings="chart_settings" :legend-visible="false" height="500px" :events="{click:handleClick}" />
    <additional-info>当前各点的实时位移信息</additional-info>
  </div>
</template>

<script>
  import AdditionalInfo from './AdditionalInfo.vue';

  const dataFormatter = (data)=>{ // 将数据库内容转换为图表格式
    let chart_data_rows = [];
    for (let i=1;i<16;i++) {
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
          rows: dataFormatter(data)
        }
      }
    },
    props:{
      propsHandleClick: {
        type: Function,
        required: true
      }
    },
    methods: {
      handleClick(graph_el) {
        const id = parseInt(graph_el.name.replace('#',''),10);
        this.propsHandleClick(id);
      }
    },
    components:{
      AdditionalInfo
    }
  }
</script>

<style lang="scss">

</style>
