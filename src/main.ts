import Vue from 'vue';
import router from './router';
import store from './store';
import i18n from './i18n'
import config from './utils/app-config';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);

router.beforeEach( (to, from, next) => {
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
