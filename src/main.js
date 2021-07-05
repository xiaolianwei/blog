import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from './store';
// import Markdown from './assets/article/5.md';

import '@/assets/style/reset.css';
import '@/assets/style/global.css';
import '@/assets/style/media.less';
import 'github-markdown-css';
import 'highlight.js/styles/github.css';

Vue.use(ElementUI);

// Vue.component('mark-down1', Markdown);

Vue.config.productionTip = false;

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount('#app');

export default () => {
  const app = new Vue({
    router,
    store,
    render: (h) => h(App),
  });
  return { app, router };
};
