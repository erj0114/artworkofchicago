<template>
  <div id="footer">
  Artwork of Chicago.com<br>Since 2018<br>

  <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div>
     
      <network network="facebook">
        <i class="fab fa-facebook"></i> Facebook     
      </network>
  </div>
</social-sharing>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#footer
{
  font-weight:bold;
  font-size: 20px;
  height: 100px;
  width:  100%;
  background-image: url("../assets/artworkofchicago.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -150px;
}
</style>
