import Vue from 'vue';
import Vuex from 'vuex';
import monitorAreas from './assets/monitorAreas';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    in_demo_mode: true,
    cur_area_id: '',
    cur_source_id: '',
    monitor_areas: monitorAreas
  },
  mutations: {
    toggleDemo(state) {
      state.in_demo_mode = !state.in_demo_mode;
    },
    setCurArea(state, cur_area_id) {
      state.cur_area_id = cur_area_id;
    },
    setCurSource(state, cur_source_id) {
      state.cur_source_id = cur_source_id;
    },
  },
  actions: {},
});
