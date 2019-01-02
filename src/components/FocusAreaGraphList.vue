<template>
    <div>
      <div v-for="focusArea in sortedFocusAreas" v-bind:key="focusArea.id">
        <FocusAreaGraph
          :focusArea="focusArea"/>
      </div>
    </div>
</template>

<script>
import FocusAreaGraph from './FocusAreaGraph'
import sortFocusAreas from './sort-focus-areas-by-latest-entry'

export default {
  name: 'FocusAreaGraphList',
  props: ['focusAreas'],
  components: {
    FocusAreaGraph
  },
  computed: {
    sortedFocusAreas () {
      return sortFocusAreas(this.focusAreas.slice())
    }
  }
}
</script>
