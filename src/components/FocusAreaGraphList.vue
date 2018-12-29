<template>
    <div>
      <div v-for="focusArea in focusAreas" v-bind:key="focusArea.id">
        <FocusAreaGraph
          :focusArea="focusArea"/>
      </div>
    </div>
</template>

<script>
import FocusAreaGraph from './FocusAreaGraph'
export default {
  name: 'FocusAreaGraphList',
  props: ['focusAreas'],
  components: {
    FocusAreaGraph
  }
}
</script>
