<template>
    <div class="focus-area-graph">
      <h2 class="focus-area-graph__name">{{focusArea.name}}</h2>
      <div v-bind:class="graphSelectorClass"/>
    </div>
</template>

<script>
import transformEntriesToCalHeatmap from './transform-entries-to-cal-heatmap-format'
import calHeatmap from './cal-heatmap'

export default {
  name: 'FocusAreaGaph',
  props: ['focusArea'],
  computed: {
    graphSelectorClass: function () {
      return `focus-area-graph__graph--${this.focusArea.id}`
    }
  },
  mounted () {
    this.$nextTick(function () {
      calHeatmap(`.${this.graphSelectorClass}`, transformEntriesToCalHeatmap(this.focusArea.entries))
    })
  }
}
</script>

<style scoped>

</style>
