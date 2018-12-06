<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <Home msg="Artwork of Chicago"/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Navigation
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(198, 203, 252);
  padding-bottom: 20vh;
}
</style>

