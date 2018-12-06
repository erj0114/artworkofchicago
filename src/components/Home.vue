<template>
  <div class="hello">
    <p>
      We are dedicated artists that are leading the current expressions and progression in the Chicagoland community for art
    </p>
    <h3>Chicago Based Artists</h3>
    <ul>
      <Artist
        name="Baby Boy Miller / Michael Michael"
        link="https://www.artworkofchicago.com/artist/babyboymiller"/>
      <Artist
        name="Eric Johnson"
        link="https://www.erj-art.com"/>
      <Artist
        name="Judson Swertman"
        link="https://www.artworkofchicago.com/artist/judson"/>
      </ul>
  </div>
</template>

<script>
import Artist from "./Artist.vue"
export default {
  name: 'Home',
  components: {
    Artist
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 36px;
}
h3 {
  font-size: 28px;
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 10px;
}
a {
  color: #08160f;
}
.hello {
  margin-top: 20px;
}
</style>
