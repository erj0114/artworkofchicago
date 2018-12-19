<template>
  <div class="hello">
    <h3>Chicago Based Artists</h3>
    <ul>
      <Artist
        name="Baby Boy Miller / Michael Michael Thomas"
        link="https://www.artworkofchicago.com/artist/babyboymiller"/>
      <Artist
        name="Darius Narb"
        link="http://upcycledstoneart.simplesite.com/"/>
      <Artist
        name="Eric Johnson"
        link="https://www.erj-art.com"/>
      <Artist
        name="Judson Swertman"
        link="https://www.artworkofchicago.com/artist/judson"/>
      <Artist
        name="Wendy Montague"
        link="https://www.artworkofchicago.com/artist/judson"/>
      
    </ul>
      <h3>Vision</h3>
      <p>
      We are dedicated artists that are leading the progression in the Chicagoland area
   </p>
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
p {
  font-size: 25px;
}
h1 {
  font-size: 50px;
}
h3 {
  font-size: 50px;
  margin: 50px 0 0;
  margin-bottom: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 10px;
  font-size: 26px;
}
a {
  color: #08160f;
}
.hello {
  margin-top: 40px;
}
</style>