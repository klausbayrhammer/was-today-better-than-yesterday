// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {loadFocusAreas} from './database/load-focus-areas'
import VueRouter from 'vue-router'
import FocusAreaList from './components/FocusAreaList'
import AddFocusAreaEntryWizzard from './components/AddFocusAreaEntryWizzard'
import FocusAreGraphList from './components/FocusAreaGaphList'

Vue.use(VueRouter)

async function loadApp () {
  let focusAreas = await loadFocusAreas()
  const routes = [
    {path: '/graph', component: FocusAreGraphList, props: {focusAreas}},
    {path: '/', component: AddFocusAreaEntryWizzard, props: {focusAreas}},
    {path: '/edit-focus-areas', component: FocusAreaList, props: {initialFocusAreas: focusAreas}}
  ]

  const router = new VueRouter({routes})
  Vue.config.productionTip = false

  /* eslint-disable no-new */
  new Vue({
    router,
    template: `
    <div id="app">
      <h1>Was today better than yesterday?</h1>
      <ul>
        <li><router-link to="/">Enter todays values for focus-areas</router-link></li>
        <li><router-link to="/graph">Graph</router-link></li>
        <li><router-link to="/edit-focus-areas">Edit Focus Areas</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  `
  }).$mount('#app')
}

loadApp()
