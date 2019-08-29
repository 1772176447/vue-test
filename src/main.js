import Vue from 'vue'
import App from './App.vue'
import iview from 'iview'
import Router from 'vue-router'
import routes from './router'
import VueScroller from 'vue-scroller'

Vue.use(Router);
Vue.use(VueScroller)

Vue.config.productionTip = false
Vue.use(iview);
import 'iview/dist/styles/iview.css';
import './static/index.less'
let router = new Router({
  routes
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
