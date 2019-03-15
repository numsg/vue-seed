import Vue from 'vue';
import Router from 'vue-router';
import { LoginComponent } from '../components/login'
import { ErrorComponent } from '../components/error'
import { LayoutComponent } from '../components/layout/layout'
import  ErrorVUEComponent  from '../view/404.vue';

export const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: LoginComponent,
    hidden: true
  },
  {
    path: '/404',
    name: '',
    component: ErrorComponent,
    hidden: true
  },
  {
    path: '*',
    hidden: true,
    redirect: { path: '/404' }
  },
  {
    path: '/',
    component: LayoutComponent,
    name: 'numsg',
    hidden: false,
    iconCls: 'el-icon-message',
    children: [
        {
          path: '/biz1',
          component: () => import('../components/biz1').then(({ Biz1Component }) => Biz1Component),
          name: 'biz1' ,
          hidden: false
        },
        {
          path: '/biz2',
          component: ErrorComponent,//ErrorVUEComponent, //LoginComponent,
          name: 'biz2' ,
          hidden: false
        },
        { path: '/form', component: ErrorVUEComponent, name: 'Form' , hidden: false},
        { path: '/user', component: LoginComponent, name: '列表' , hidden: false},
    ]
  }
]

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRouterMap
});
