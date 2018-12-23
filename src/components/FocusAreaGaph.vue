<template>
    <div class="focus-area-graph">
      <h2 class="focus-area-graph__name">{{focusArea.name}}</h2>
      <div v-bind:class="graphSelectorClass"/>
    </div>
</template>

<script>
import CalHeatMap from 'cal-heatmap'
import 'cal-heatmap/cal-heatmap.css'
import transformEntriesToCalHeatmap from './transform-entries-to-cal-heatmap-format'
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
      const cal = new CalHeatMap()
      cal.init({
        itemSelector: `.${this.graphSelectorClass}`,
        data: transformEntriesToCalHeatmap(this.focusArea.entries),
        domain: 'month',
        subdomain: 'day',
        cellSize: 10,
        range: 12,
        start: new Date('2018-11-11'),
        legend: [-0.1, 0, 0.1],
        legendColors: {
          min: 'red',
          max: 'green'
        }
      })
    })
  }
}
</script>

<style scoped>

</style>
