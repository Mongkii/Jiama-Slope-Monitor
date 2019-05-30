import Vue from 'vue';
import App from './App.vue';
// import router from './router';
import store from './store';
import './plugins/element.js'
import VueAMap from 'vue-amap';
import VCharts from 'v-charts'

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'ff025605df8d398bd46968acce6570c7',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.14'
});

Vue.use(VCharts);

Vue.config.productionTip = false;

new Vue({
  //router,
  store,
  render: h => h(App),
}).$mount('#app');