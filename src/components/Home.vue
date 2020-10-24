<template>
  <div class="home">
    ARTWORK OF CHICAGO . COM
    <h3 v-html="title"></h3>
    <!-- <h3><span class="highlighted-letter">C</span>hicago
    <span class="highlighted-letter">B</span>ased <span class="highlighted-letter">A</span>rtists</h3> -->
    
<br>
    <p>
      <strong>We are dedicated artists that are leading the progression in the Chicagoland area.</strong>
   </p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  computed: {
    title() {
      const myTitle = "Artwork Of Chicago"
      // A|r|t|w|o|r|k| |O|f| |C|h|i|c|a|g|o  Artists
      // 0|1|2|3|4|5|6|7|8|9|
      let response = ""
      for (let i = 0; i < myTitle.length; i++) {
        const letter = myTitle[i];
        if(i % 4 == 0) {
          response += `<span class="highlighted-letter">${letter}</span>` 
        } else {
          response += letter;
        }
      }
      return response
    }
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
a:hover {
background-color: lightcoral
}
.home {
  margin-top: 20px;
}
.home >>> .highlighted-letter{
  background-color: lightcoral;
}
</style>
