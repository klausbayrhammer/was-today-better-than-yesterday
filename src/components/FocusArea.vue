<template>
  <li class="focus-area row">
    <span class="focus-area__deleted-container">
        <input class="focus-area__deleted"
               type="checkbox"
               v-bind:id="id"
               v-model="deleted"/>
        <label v-bind:for="id"></label>
      </span>
    <input class="focus-area__name-field" type="text" v-if="editMode" v-model="name" @change="updateDescription"/>
    <span class="focus-area__name" v-if="!editMode" @click="toggleEdit">{{name}}</span>
  </li>
</template>

<script>
import deleteFocusArea from '../database/delete-focus-area'
import updateFocusAreaDescription from '../database/update-focus-area-description'
import 'skeleton-checkboxes/skeleton-checkboxes.css'

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

  .focus-area__deleted-container {
    padding-right: 20px;
  }

  .focus-area {
    height: 54px;
  }
</style>
