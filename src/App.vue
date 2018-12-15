<template>
  <div id="app">
    <FocusAreaList v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import FocusAreaList from './components/FocusAreaList'

export default {
  name: 'App',
  data: function () {
    return {
      focusAreas: [
        {name: 'Punctuality', deleted: false},
        {name: 'TDD', deleted: true}
      ]
    }
  },
  components: {
    FocusAreaList
  }
}
</script>

<style>
  #app {
    margin-top: 60px;
  }
</style>
