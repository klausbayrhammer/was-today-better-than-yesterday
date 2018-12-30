<template>
  <div>
    <AddFocusAreaEntry
      v-if="nextFocusArea"
      v-bind:name="nextFocusArea.name"
      v-bind:id="nextFocusArea.id"
      v-bind:add-entry="addEntry"/>
    <div v-else>
      <span class="add-focus-area-entry-wizzard__done">Done for today</span>
      <FocusAreaGraphList v-bind:focus-areas="focusAreas"/>
    </div>
  </div>
</template>

<script>
import AddFocusAreaEntry from './AddFocusAreaEntry'
import addEntry from '../database/add-entry'
import filterFocusAreas from './filter-focus-areas-for-pending-todays-entries'
import FocusAreaGraphList from './FocusAreaGraphList'

export default {
  name: 'AddFocusAreaEntryWizzard',
  props: ['focusAreas'],
  methods: {
    addEntry
  },
  computed: {
    nextFocusArea: function () {
      return filterFocusAreas(this.focusAreas)
    }
  },
  components: {
    AddFocusAreaEntry,
    FocusAreaGraphList
  }
}
</script>
