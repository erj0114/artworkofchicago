<template>
  <div class="Logout">
    <h1>Artist Log Out</h1>
    <h2>Logged Out Succesful</h2>
    <router-link to="/">
          Artwork of Chicago
          <br>Home
        </router-link>
    
  </div>
</template>

<script>
export default {
  name: "Logout"
};
</script>

<style lang="scss">
.Logout {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 50px;  
  }
  a:hover {
    background-color: lightcoral;
  }
}
</style>