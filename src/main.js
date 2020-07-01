// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import BootstrapVue from "bootstrap-vue"
import VueSweetalert2 from "vue-sweetalert2";
import VueGallery from 'vue-gallery'
import { rtdbPlugin } from "vuefire";
import VueAnalytics from 'vue-analytics';
import VueLazyload from 'vue-lazyload';

Vue.use(router);
Vue.use(rtdbPlugin);
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);
Vue.use(VueGallery);
Vue.use(VueLazyload);
Vue.config.productionTip = false;

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-166845191-1',
    router
});

/* eslint-disable no-new */
new Vue({
    el: "#app",
    router,
    components: { App },
    template: "<App/>"
});
