<template>
  <div id="app">
    <FocusAreaList v-bind:initial-focus-areas="focusAreas"/>
  </div>
</template>

<script>
import FocusAreaList from './components/FocusAreaList'

export default {
  name: 'App',
  props: ['focusAreas'],
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
