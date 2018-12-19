<template>
  <div id="app">
    <Header/>
    <Navigation/>
    <Home msg="Artwork of Chicago"/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Navigation from './components/Navigation.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Footer,
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
  color: #ffffff;
  background-color: rgb(5, 5, 5);
}
</style>

