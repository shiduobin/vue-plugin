// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vuex from 'vuex'
import axios from 'axios'
// 自定义插件
import plugin from './plugin/index';
// 自定义指令
import directive from './directive/index';

// 自定义组件
import myComponents from './components/index';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.use(plugin);
Vue.use(myComponents);

Object.keys(directive).forEach(item => {
  console.log(directive[item]);
  Vue.directive(item, directive[item]);
});

// 全局变量设置
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.baseURL = '/host';

// UE编辑器
import '../static/ue/ueditor.config.js'
import '../static/ue/ueditor.all.min.js'
import '../static/ue/lang/zh-cn/zh-cn.js'
import '../static/ue/ueditor.parse.min.js'

// 字体图标
import 'font-awesome/css/font-awesome.css'

// animation动画库
import '../static/css/animation.css';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
