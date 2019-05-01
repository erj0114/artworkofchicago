<template>
  <div id="app">
    <Header/>
    <Navigation/>
     <router-view></router-view>
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
  color:lightgreen;
  text-decoration: purple underline;
  box-shadow: 0px 100px 100px lightsalmon;
  background-color: rgb(5, 5, 5);
}
</style>

