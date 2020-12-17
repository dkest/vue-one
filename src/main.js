import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import App from './App.vue'

import Login from './views/login/login.vue'
import HomePage from './views/HomePage.vue'

import Index from './views/index/index';
import Novel from './views/index/novel.vue';

import Mock from './mock/mock';

Mock.mockData();
Vue.use(VueRouter); // 安装路由功能
/* eslint-disable no-new */
Vue.use(VueRouter);
Vue.prototype.$http = axios;
Vue.use(ElementUI);

Vue.config.productionTip = false

// Vue.http.interceptors.push((request, next) => {
//   request.credentials = true;
//   next((response) => {
//     let messageHeader;
//     /* global IS_PRODUCTION:true */
//     if (IS_PRODUCTION) {
//       messageHeader = "X-Auth-Token";
//     } else {
//       messageHeader = "x-auth-token";
//     }
//     if (messageHeader in response.headers.map) {
//       router.push({path: '/login'});
//     }
//     return response
//   });
// });


let routes = [{
    path: '/login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/homepage',
    component: HomePage,
    children: [{
        path: '/index',
        component: Index,
      },
      {
        path: '/novel',
        component: Novel,
      }
    ]
  }
];
let router = new VueRouter({
  // 'mode': 'history', 去掉URL的#号，需要配置服务器http://router.vuejs.org/zh-cn/essentials/history-mode.html
  'linkActiveClass': 'active',
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')