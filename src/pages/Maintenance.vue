<template>
  <div>
    <Loading v-if="isLoading" />
    <FocusAreaList v-else v-bind:initial-focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import FocusAreaList from '../components/FocusAreaList'
import Loading from '../components/Loading'

export default {
  name: 'Maintenance',
  components: {
    FocusAreaList,
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
