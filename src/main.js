// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {loadFocusAreas} from './database/load-focus-areas'
import VueRouter from 'vue-router'
import AddFocusAreaEntryWizzard from './components/AddFocusAreaEntryWizzard'
import Maintenance from './pages/Maintenance'
import Graph from './pages/Graph'
import Auth from './components/Auth'
import {signInCallback} from './auth/auth'

Vue.use(VueRouter)

async function loadApp () {
  let focusAreas = await loadFocusAreas()
  const routes = [
    {path: '/graph', component: Graph},
    {path: '/', component: AddFocusAreaEntryWizzard, props: {focusAreas}},
    {path: '/edit-focus-areas', component: Maintenance}
  ]

  const router = new VueRouter({routes})
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    router,
    components: {
      Auth
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
      <h1>Was today better than yesterday?</h1>
      <div v-if="signedIn">
        <ul>
          <li><router-link to="/">Enter todays values for focus-areas</router-link></li>
          <li><router-link to="/graph">Graph</router-link></li>
          <li><router-link to="/edit-focus-areas">Maintenance</router-link></li>
        </ul>
        <router-view></router-view>
      </div>
      <div v-else>
        <Auth />
      </div>
    </div>
  `
  }).$mount('#app')
}

loadApp()
