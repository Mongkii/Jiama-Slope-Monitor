<template>
  <single-dot-graph v-if="focused_dot>0" :id.sync="focused_dot"></single-dot-graph>
  <all-dots-graph v-else :id.sync="focused_dot"></all-dots-graph>
</template>

<script>
  import AllDotsGraph from './AllDotsGraph.vue';
  import SingleDotGraph from './SingleDotGraph.vue';

  export default {
    data() {
      return {
        focused_dot: -1
      };
    },
    components: {
      AllDotsGraph,
      SingleDotGraph
    }
  };
</script>

<style lang="scss">

</style>
