// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {loadFocusAreas, onChange} from "./database/load-focus-areas"

Vue.config.productionTip = false

async function loadApp () {
  const focusAreas = await loadFocusAreas()
  /* eslint-disable no-new */
  new Vue({
    el: '#app',
    components: {App},
    data: {focusAreas},
    template: '<App v-bind:focus-areas="focusAreas"/>',
    created () {
      console.log('created')
      onChange(focusAreas => {
        console.log(focusAreas)
        this.focusAreas = focusAreas
      })
    }
  })
}

loadApp()
