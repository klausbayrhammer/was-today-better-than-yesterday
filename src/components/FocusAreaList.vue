<template>
  <div>
    <ul>
      <FocusArea
          v-for="focusArea in focusAreas"
          :key="focusArea.name"
          :initial-name="focusArea.name"
          :id="focusArea.id"
          :initial-deleted="focusArea.deleted"
          :inital-edit-mode="focusArea.editMode"/>
    </ul>
    <button class="focus-area-list__add-focus-area" @click="addFocusArea">Add Focus Area</button>
  </div>
</template>

<script>
import FocusArea from './FocusArea'
import uuid from 'uuid/v4'

export default {
  name: 'FocusAreas',
  props: ['initialFocusAreas'],
  data () {
    return {
      focusAreas: this.initialFocusAreas
    }
  },
  components: {
    FocusArea
  },
  methods: {
    addFocusArea () {
      this.focusAreas.push({id: uuid(), editMode: true, deleted: false})
    }
  }
}
</script>

<style scoped>

</style>
