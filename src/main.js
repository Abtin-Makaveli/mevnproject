import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';


Vue.use(VueFlashMessage);
import App from './App.vue';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
Vue.use(Buefy);

Vue.prototype.$activeUser = true;


import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

import Welcome from './components/Welcome.vue';
import HomePage from './components/homePage.vue';
import Viewer from './components/viewTransaction.vue';
import Deposit from './components/deposit.vue';
import Withdraw from './components/withdraw.vue';
import ETransfer from './components/etransfer.vue';
import Login from './components/login.vue';
import Login1 from './components/login1.vue';
import Register from './components/register.vue';

const routes = [
  {
    name: 'register',
    path: '/register',
    component: Register
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'login1',
    path: '/login1',
    component: Login1
  },
  {
      name: 'welcome',
      path: '/',
      component: Welcome
  },
  {
      name: 'homePage',
      path: '/homePage',
      component: HomePage
  },
  {
    name: 'viewer',
    path: '/view/:id',
    component: Viewer
  },
  {
    name: 'deposit',
    path: '/deposit',
    component: Deposit
  },
  {
    name: 'withdraw',
    path: '/withdraw',
    component: Withdraw
  },
  {
    name: 'eTransfer',
    path: '/eTransfer',
    component: ETransfer
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});

new Vue(Vue.util.extend({ router }, App)).$mount('#app');