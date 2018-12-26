import Vue from 'vue';
import Router from 'vue-router';
import { LoginComponent } from '../components/login'
import { ErrorComponent } from '../components/error'
import { LayoutComponent } from '../components/layout/layout'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginComponent,
      caseSensitive: true
    },
    {
      path: '/404',
      name: '',
      component: ErrorComponent,
      caseSensitive: true
    },
    {
      path: '*',
      caseSensitive: true,
      redirect: { path: '/404' }
    },
    {
      path: '/',
      component: LayoutComponent,
      name: 'numsg',
      caseSensitive: false,
      // iconCls: 'el-icon-message',//图标样式class
      children: [
          {
            path: '/biz1',
            component: () => import('../components/biz1').then(({ Biz1Component }) => Biz1Component),
            name: 'biz1' ,
            caseSensitive: false
          },
          {
            path: '/biz2',
            component: LoginComponent,
            name: 'biz2' ,
            caseSensitive: false
          },
          { path: '/form', component: LoginComponent, name: 'Form' , caseSensitive: false},
          { path: '/user', component: LoginComponent, name: '列表' , caseSensitive: false},
      ]
  },
  ],
});
