<template>
    <li>
      <a :href="link" target="_blank" rel="noopener">
        {{name}}
      </a>
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
