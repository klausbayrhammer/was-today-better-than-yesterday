<template>
  <div>
    <Loading v-if="isLoading" />
    <FocusGraphList v-else v-bind:focus-areas="focusAreas"/>
  </div>
</template>

<script>
import {onChange} from '../database/load-focus-areas'
import FocusGraphList from '../components/FocusAreaGraphList'
import Loading from '../components/Loading'

export default {
  name: 'Graph',
  components: {
    FocusGraphList,
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
