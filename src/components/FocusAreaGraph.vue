<template>
    <div class="focus-area-graph">
      <h2 class="focus-area-graph__name">{{focusArea.name}}</h2>
      <div v-bind:class="graphSelectorClass"/>
    </div>
</template>

<script>
import calHeatmap from './cal-heatmap/cal-heatmap'

export default {
  name: 'FocusAreaGraph',
  props: ['focusArea'],
  computed: {
    graphSelectorClass: function () {
      return `focus-area-graph__graph--${this.focusArea.id}`
    }
  },
  mounted () {
    this.$nextTick(function () {
      calHeatmap(`.${this.graphSelectorClass}`, this.focusArea.entries)
    })
  }
}
</script>
<style scoped>
 .focus-area-graph {
   padding-bottom: 40px;
 }
</style>
