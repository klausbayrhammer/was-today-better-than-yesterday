<template>
  <li class="focus-area row">
    <input class="focus-area__name-field three columns" type="text" v-if="editMode" v-model="name" @change="updateDescription" />
    <span class="focus-area__name three columns" v-else @click="toggleEdit" >{{name}}</span>
    <input class="focus-area__deleted one column"
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
      this.editMode = false
      updateFocusAreaDescription({id: this.id, name: this.name})
    }
  },
  watch: {
    deleted () {
      deleteFocusArea({deleted: this.deleted, id: this.id})
    }
  }
}
</script>

<style scoped>
.focus-area {
  list-style: none;
}
</style>
