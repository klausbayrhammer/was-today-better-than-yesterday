<template>
  <div id="app">
    <FocusAreaList v-bind:initial-focus-areas="focusAreas"/>
    <AddFocusAreaEntryWizzard v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import FocusAreaList from './components/FocusAreaList'
import AddFocusAreaEntryWizzard from './components/AddFocusAreaEntryWizzard'
export default {
  name: 'App',
  props: ['focusAreas'],
  components: {
    FocusAreaList,
    AddFocusAreaEntryWizzard
  }
}
</script>

<style>
  #app {
    margin-top: 60px;
  }
</style>
