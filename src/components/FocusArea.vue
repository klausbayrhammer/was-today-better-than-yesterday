<template>
  <li class="focus-area">
    <input class="focus-area__name-field" type="text" v-if="editMode" v-model="name" @change="updateDescription" />
    <span class="focus-area__name" v-else @click="toggleEdit" >{{name}}</span>
    <input class="focus-area__deleted"
           type="checkbox"
           v-model="deleted" />
  </li>
</template>

<script>
import deleteFocusArea from '../database/delete-focus-area'
import updateFocusAreaDescription from '../database/update-focus-area-description'

export default {
  name: 'FocusArea',
  props: ['id', 'initialName', 'initialDeleted', 'initalEditMode'],
  data: function () {
    return {
      name: this.initialName,
      editMode: this.initalEditMode,
      deleted: this.initialDeleted
    }
  },
  methods: {
    toggleEdit () {
      this.editMode = !this.editMode
    },
    updateDescription () {
      updateFocusAreaDescription({id: this.id, name: this.name})
    }
  },
  watch: {
    deleted () {
      deleteFocusArea({deleted: this.deleted, name: this.name})
    }
  }
}
</script>

<style scoped>

</style>
