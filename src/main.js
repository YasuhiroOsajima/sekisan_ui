import Vue from "vue";
import "material-icons/iconfont/material-icons.css";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios'

Vue.config.productionTip = false;

Vue.prototype.$axios = axios;
Vue.prototype.$axios.defaults.withCredentials = true;
Vue.prototype.$axios.defaults.xsrfHeaderName =  'X-CSRF-Token';

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
