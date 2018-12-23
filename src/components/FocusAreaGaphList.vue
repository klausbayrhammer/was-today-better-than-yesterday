<template>
    <div>
      <div v-for="focusArea in focusAreas">
        <FocusAreaGraph
          :focusArea="focusArea"/>
      </div>
    </div>
</template>

<script>
import FocusAreaGraph from './FocusAreaGaph'
export default {
  name: 'FocusAreaGaphList',
  props: ['focusAreas'],
  components: {
    FocusAreaGraph
  }
}
</script>

<style scoped>

</style>
