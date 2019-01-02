// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Maintenance from './pages/Maintenance'
import Graph from './pages/Graph'
import DailyEntries from './pages/DailyEntries'
import Auth from './components/Auth'
import Navigation from './components/Navigation'

import {signInCallback} from './auth/auth'

Vue.use(VueRouter)

const routes = [
  {path: '/graph', component: Graph},
  {path: '/', component: DailyEntries},
  {path: '/edit-focus-areas', component: Maintenance}
]

const router = new VueRouter({routes})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  components: {
    Auth,
    Navigation
  },
  data: {
    signedIn: false
  },
  created () {
    signInCallback(signedIn => {
      this.signedIn = signedIn
    })
  },
  template: `
    <div id="app">
      <div v-if="signedIn">
        <Navigation />
        <div class="container" style="padding-top:20px">
          <router-view></router-view>
        </div>
      </div>
      <div v-else>
        <Auth />
      </div>
    </div>
  `
}).$mount('#app')
