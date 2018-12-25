<template>
  <div>
    <AddFocusAreaEntry
      v-if="nextFocusArea"
      v-bind:name="nextFocusArea.name"
      v-bind:id="nextFocusArea.id"
      v-bind:add-entry="addEntry"/>
    <span v-else class="add-focus-area-entry-wizzard__done">Done for today</span>
  </div>
</template>

<script>
import AddFocusAreaEntry from './AddFocusAreaEntry'
import addEntry from '../database/add-entry'
import filterFocusAreas from './filter-focus-areas-for-pending-todays-entries'
import {onChange} from '../database/load-focus-areas'

export default {
  name: 'AddFocusAreaEntryWizzard',
  props: ['focusAreas'],
  data () {
    return {sFocusAreas: this.focusAreas}
  },
  methods: {
    addEntry
  },
  computed: {
    nextFocusArea: function () {
      return filterFocusAreas(this.sFocusAreas)
    }
  },
  created () {
    onChange(changedFocusAreas => {
      this.sFocusAreas = changedFocusAreas
    })
  },
  components: {
    AddFocusAreaEntry
  }
}
</script>

<style scoped>

</style>
