<template>
  <div id="header">
    
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#header
 {
   height: 300px;
   width:  100%;

   background-image: url("../assets/chicagopic.png");
   background-size: cover;
   background-repeat: no-repeat;
   background-position-y: -150px;
}
@media only screen and (max-width: 600px)  {
  
  #header
  {
    background-position-y: -10px;
  }
} 
@media only screen and (max-width: 1024px) and (min-width: 601px)  {
   
  #header
  {
    background-position-y: -100px;
  }
} 
</style>
