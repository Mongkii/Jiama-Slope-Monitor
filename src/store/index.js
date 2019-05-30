import Vue from 'vue';
import Vuex from 'vuex';
import monitorAreas from '../assets/monitorAreas.js';
import Database from '../database';
import {Timer} from '../methods/assistFunctions.js';
import {generateDataItem} from '../database/generateDemoData.js';
import {SLOPE_NORMAL,SLOPE_EARTHQUAKE,model_url} from '../assets/refer.js';
import * as effect from './effect.js';
import * as tf from '@tensorflow/tfjs/dist/index.js';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    in_demo_mode: true,
    cur_area_id: '',
    cur_source_id: '',
    monitor_areas: monitorAreas,
    database: new Map([['1',new Database()]]),
    random_data_range:[],
    timer: new Timer(()=>{},5000),
    fs_normal: 1.456,
    fs_earthquake: 1.191,
    model_type: SLOPE_NORMAL,
    model: undefined
  },
  mutations: {
    [effect.toggleDemo](state) {
      if (state.in_demo_mode) {
        alert('要关闭演示模式，请连接到监测预警服务器！');
        /* 与服务器对接的语句 */
      } else {
        state.in_demo_mode = true;
      }
    },
    [effect.setCurArea](state, cur_area_id) {
      state.cur_area_id = cur_area_id;
    },
    [effect.setCurSource](state, cur_source_id) {
      state.cur_source_id = cur_source_id;
    },
    [effect.refreshDatabase](state) {
      const cur_database = state.database.get('1');
      state.database = new Map([['1',cur_database]]);
    },
    [effect.setFs](state, {fs_normal, fs_earthquake}) {
      state.fs_normal = fs_normal;
      state.fs_earthquake = fs_earthquake;
    },
    [effect.setModel](state, model) {
      state.model = model;
    },
    [effect.setModelType](state, model_type) {
      state.model_type = model_type;
    },
    [effect.setTimer](state, {fn,delay,isOn}) {
      state.timer.isOn = false;
      state.timer.fn = fn;
      state.timer.delay = delay;
      state.timer.isOn = isOn;
    }
  },
  actions: {
    async [effect.loadModel]({commit},model_type) {
      model_type = model_type||SLOPE_NORMAL;
      const url_item = model_url.find(item=>item.type === model_type);
      if (url_item) {
        const url = url_item.url;
        const model = await tf.loadLayersModel(url);
        commit(effect.setModel,model);
        commit(effect.setModelType,model_type);
      }
    }
  },
});
