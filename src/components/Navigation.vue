<template>
  <div class="navigation">
    <ul class="navigation__container">
      <li class="navigation__item">
        <router-link class="navigation__link" to="/">Add</router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/graph">Graph</router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" to="/edit-focus-areas">Maintenance</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Navigation'
}
</script>

<style scoped>
  .navigation__item {
    list-style: none;
    letter-spacing: .2rem;
    position: relative;
    line-height: 6.5rem;
    flex-direction: row;
    margin-bottom: 0;
  }

  .navigation__link {
    margin-right: 35px;
    text-decoration: none;
    color: black;
    text-transform: uppercase;
  }

  .navigation {
    border-bottom: 1px solid #eee;
  }
  .navigation__container {
    display: flex;
    margin-bottom: 0;
    width: 80%;
    margin: 0 auto;
  }
</style>
