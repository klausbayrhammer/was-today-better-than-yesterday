<template>
  <div>
    <div v-if="isLoading" class="maintenance__loading"></div>
    <FocusAreaList v-else v-bind:initial-focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import FocusAreaList from '../components/FocusAreaList'

export default {
  name: 'Maintenance',
  components: {
    FocusAreaList
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
