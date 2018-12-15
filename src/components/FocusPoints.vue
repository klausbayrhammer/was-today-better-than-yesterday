<template>
  <ul>
    <FocusPoint
        v-for="focuspoint in focusPoints"
        v-bind:key="focuspoint.name"
        v-bind:name="focuspoint.name"
        v-bind:initial-deleted="focuspoint.deleted"/>
  </ul>
</template>

<script>
import FocusPoint from './FocusPoint'

export default {
  name: 'FocusPoints',
  data () {
    return {
      focusPoints: [
        {name: 'Punctuality', deleted: false},
        {name: 'Taking time for people managemetn', deleted: true}
      ]
    }
  },
  components: {
    FocusPoint
  }
}
</script>

<style scoped>

</style>
