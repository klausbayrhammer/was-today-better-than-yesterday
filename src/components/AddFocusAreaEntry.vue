<template>
  <div class="focus-area-entry">
    <h2 class="focus-area-entry__name">{{name}}</h2>
    <div class="focus-area-entry__list">
      <i class="large material-icons focus-area-entry__item focus-area-entry__better" @click="entry(1)">thumb_up</i>
      <i class="large material-icons focus-area-entry__item focus-area-entry__not-applicable" @click="entry(0)">trending_flat</i>
      <i class="large material-icons focus-area-entry__item focus-area-entry__worse" @click="entry(-1)">thumb_down</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddFocusAreaEntry',
  props: ['id', 'name', 'addEntry'],
  methods: {
    entry (value) {
      this.addEntry({id: this.id, value})
    }
  }
}
</script>

<style scoped>
 .focus-area-entry__item {
   font-size: 80px;
   cursor: pointer;
 }
  .focus-area-entry__list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;

  }
</style>
