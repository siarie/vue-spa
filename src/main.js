import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import titleMixin from './mixins/title'
import Home from './components/Home'
import Development from './components/Development'

Vue.config.productionTip = false

Vue.mixin(titleMixin)
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Development',
      path: '/:something',
      component: Development
    }
  ]
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
