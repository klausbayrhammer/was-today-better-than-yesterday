<template>
    <div class="focus-area-graph">
      <h2 class="focus-area-graph__name">{{focusArea.name}}</h2>
      <div class="focus-area-graph__streak">
        Streak:
        <span class="focus-area-graph__current-streak" title="current streak">{{currentStreak}}</span>
        /
        <span class="focus-area-graph__longest-streak" title="longest streak">{{longestStreak}}</span>
      </div>
      <div v-bind:class="graphSelectorClass"/>
    </div>
</template>

<script>
import calHeatmap from './cal-heatmap/cal-heatmap'

export default {
  name: 'FocusAreaGraph',
  props: ['focusArea'],
  computed: {
    currentStreak () {
      return this.focusArea['@streak'] ? this.focusArea['@streak'].current : 0
    },
    longestStreak () {
      return this.focusArea['@streak'] ? this.focusArea['@streak'].longest : 0
    },
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
