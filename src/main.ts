import Vue from 'vue';
import router from './router';
import store from './store';
import i18n from './i18n'
// import config from './utils/app-config';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);

// import VueTsCss from './numsg-plugin';
// Vue.use(VueTsCss);
import VueCssTs from 'vue-css-ts';
Vue.use(VueCssTs);

router.beforeEach( (to: any, from: any, next: any) => {
  if (to.path == '/login') {
    sessionStorage.removeItem('Admin-Token');
  }
  let token = sessionStorage.getItem('Admin-Token');
  if (!token && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  i18n
}).$mount('#app-main');
