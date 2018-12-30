<template>
  <div>
    <Loading v-if="isLoading" />
    <AddFocusAreaEntryWizzard v-else v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import AddFocusAreaEntryWizzard from '../components/AddFocusAreaEntryWizzard'
import Loading from '../components/Loading'

export default {
  name: 'DailyEntries',
  components: {
    AddFocusAreaEntryWizzard,
    Loading
  },
  data () {
    return {
      isLoading: true,
      focusAreas: []
    }
  },
  created () {
    onChange(focusAreas => {
      this.isLoading = false
      this.focusAreas = focusAreas
    })
  }
}
</script>
