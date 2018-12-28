<template>
  <div>
    <div v-if="isLoading" class="maintenance__loading"></div>
    <FocusGraphList v-else v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import FocusGraphList from '../components/FocusAreaGaphList'

export default {
  name: 'Graph',
  components: {
    FocusGraphList
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
