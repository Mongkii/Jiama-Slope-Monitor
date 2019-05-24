<template>
  <single-dot-graph v-if="focused_dot>0" :id="focused_dot" :propsHandleClick="setFocusedDot"></single-dot-graph>
  <all-dots-graph v-else :propsHandleClick="setFocusedDot"></all-dots-graph>
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
    methods: {
      setFocusedDot(id) {
        this.focused_dot = id;
      }
    },
    components: {
      AllDotsGraph,
      SingleDotGraph
    }
  };
</script>

<style lang="scss">

</style>
