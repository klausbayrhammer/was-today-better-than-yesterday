<template>
  <ul>
    <FocusArea
        v-for="focusArea in focusAreas"
        v-bind:key="focusArea.name"
        v-bind:name="focusArea.name"
        v-bind:initial-deleted="focusArea.deleted"/>
  </ul>
</template>

<script>
import FocusArea from './FocusArea'

export default {
  name: 'FocusAreas',
  props: ['focusAreas'],
  components: {
    FocusArea
  }
}
</script>

<style scoped>

</style>
