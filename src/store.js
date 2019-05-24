import Vue from 'vue';
import Vuex from 'vuex';
import monitorAreas from './assets/monitorAreas';
import database from './database';
import {generateDataItem} from './database/generateDemoData.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    in_demo_mode: true,
    cur_area_id: '',
    cur_source_id: '',
    monitor_areas: monitorAreas,
    database: new Map([['1',new database()]])
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
    refreshDatabase(state) {
      const cur_database = state.database.get('1');
      cur_database.add(generateDataItem(Date.now()));
      state.database = new Map([['1',cur_database]]);
    }
  },
  actions: {},
});
