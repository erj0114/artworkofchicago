<template>
    <li>
      <router-link :to="link">{{name}}</router-link>
    </li>
</template>

<script>
export default {
  name: 'Artist',
  props: {
    link: String, 
    name: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
