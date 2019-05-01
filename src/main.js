import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home'
import ArtistDetail from './components/ArtistDetail'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SocialSharing from 'vue-social-sharing'

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(SocialSharing);
Vue.config.productionTip = false

const routes = [
  { path: '/', component: Home },
  { path: '/artist/:id', component: ArtistDetail, props: true  }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
