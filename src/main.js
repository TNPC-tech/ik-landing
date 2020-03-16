import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import jQuery from 'jquery'
global.jQuery = jQuery
let bootrsap = require('bootstrap')

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
