<template>
  <div id="footer">
  <strong>Artwork of Chicago.com</strong><br>© 2018 All Rights Reserved

  <social-sharing url="https://vuejs.org/"
                      title="The Progressive JavaScript Framework"
                      description="Intuitive, Fast and Composable MVVM for building interactive interfaces."
                      quote="Vue is a progressive framework for building user interfaces."
                      hashtags="vuejs,javascript,framework"
                      twitter-user="vuejs"
                      inline-template>
  <div class="social-icons">
     
      <network network="email">
          <i class="fa fa-envelope"></i> Email
      </network>
      <network network="facebook">
        <i class="fab fa-facebook"></i> Facebook
      </network>
      <network network="twitter">
        <i class="fab fa-twitter"></i> Twitter
      </network>
      <network network="linkedin">
        <i class="fab fa-linkedin"></i> LinkedIn
      </network>
      <network network="pinterest">
        <i class="fab fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fab fa-reddit"></i> Reddit
      </network>
      
      <!-- <network network="instagram">
      </network>  
        <i class="fab fa-instagram"></i> Instagram -->
      
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
.social-icons {
  cursor: pointer;
}
#footer
{
  font-weight:bold;
  font-size: 20px;
  height: 100px;
  width:  100%;
  background-image: url("..//artworkofchicago.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position-y: -150px;
  color: black;
  margin-top: 20px;
  padding-top: 0px;
}
/* <!-- Add "scoped" attribute to limit CSS to this component only --> */
#footer >>> .social-icons span:hover {
background-color: lightcoral;
text-decoration-color: red;
text-decoration-line: underline;
  color:rgb(80, 255, 255);
}
</style>

