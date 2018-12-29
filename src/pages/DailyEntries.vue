<template>
  <div>
    <div v-if="isLoading" class="maintenance__loading"></div>
    <AddFocusAreaEntryWizzard v-else v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import AddFocusAreaEntryWizzard from '../components/AddFocusAreaEntryWizzard'

export default {
  name: 'DailyEntries',
  components: {
    AddFocusAreaEntryWizzard
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

<style scoped>

</style>
