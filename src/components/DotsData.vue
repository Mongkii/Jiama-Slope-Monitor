<template>
<div>
  <ve-bar :data="chart_data" :settings="chart_settings" height="500px" />
</div>
</template>

<script>
  const dataFormatter = (data)=>{ // 将数据库内容转换为图表格式
    console.log(data);
    let chart_data_rows = [];
    for (let i=0;i<15;i++) {
      chart_data_rows.push({'point': `#${i+1}`, 'offset': data[`p${i}`]});
    }
    console.log(chart_data_rows);
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
    }
  }
</script>

<style lang="scss">

</style>
