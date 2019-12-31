<template>
  <div class="navigation">
    <b-navbar toggleable="md" type="dark" variant="info">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand>
        <router-link to="/">
          Artwork of Chicago
          <br />Home
        </router-link>
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item-dropdown id="ddown1" text="FEATURED ARTISTS">
            <b-dropdown-item>
              <Artist name="Baby Boy Miller / Michael Michael Thomas" link="/artist/babyboymiller"/>
            </b-dropdown-item>
            <!-- <b-dropdown-item>
              <Artist name="Dave Depew" link="/artist/dave"/>
            </b-dropdown-item>-->
            <b-dropdown-item>
              <Artist name="Eric Johnson" link="/artist/eric" />
            </b-dropdown-item>
            <!-- <b-dropdown-item>
              <Artist name="Erin Donnelly Ellis" link="/artist/erin"/>
            </b-dropdown-item>-->
            <b-dropdown-item>
              <Artist name="Judson Swertman" link="/artist/judson" />
            </b-dropdown-item>
            <b-dropdown-item>
              <Artist name="Matt Geer" link="/artist/mattgeer" />
            </b-dropdown-item>
            <!-- <b-dropdown-item>
              <Artist name="Thano Ellis" link="/artist/thano"/>
            </b-dropdown-item>-->
            <b-dropdown-item>
              <Artist name="Wendy Montague" link="/artist/wendy" />
            </b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item href="https://www.instagram.com/artworkofchicago/" class="instagram">
            <i class="fab fa-instagram"></i>
            Instagram
          </b-nav-item>

          <b-nav-item v-b-modal.modal-1 class="register">
            <i class="fab fa-register"></i>
            Register
          </b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>Artist Accessibility</em>
            </template>
            <b-dropdown-item href="/#/login">Sign in</b-dropdown-item>
            <b-dropdown-item href="/#/logout">Sign out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="modal-1" title="Register">
      <register>Register</register>
    </b-modal>
  </div>
</template>

<script>
import ArtistVue from "./Artist.vue";
import Register from "./Register.vue";
export default {
  name: "Navigation",
  components: {
    Artist: ArtistVue,
    Register
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  margin: 0px 0px;
  font-size: 25px;
}
.navbar-brand {
  font-weight: bold;
}

a {
  color: purple;
  text-decoration-color: red;
}
.navigation >>> a:hover {
  background-color: lightcoral;
  text-decoration-color: purple;
  color: rgb(80, 255, 255);
}
.navigation >>> .navbar-dark .navbar-nav .nav-link {
  background-color: paleturquoise;
  text-decoration-color: purple;
  color: lightcoral;
  transition: linear 1s;
  font-weight: bold;
}
.navigation >>> .navbar-dark .navbar-nav .nav-link:hover {
  background-color: purple;
  text-decoration-color: yellow;
  color: lightcoral;
  transition: linear 1s;
}
.navigation >>> .navbar-dark .navbar-nav .instagram .nav-link {
  background-color: lightcoral;
  text-decoration-color: rgb(80, 255, 255);
  color: red;
  transition: linear 1s;
}
.navigation >>> .navbar-dark .navbar-nav .instagram .nav-link:hover {
  background-color: red;
  text-decoration-color: lightcoral;
  color: purple;
  transition: linear 1s;
}
.navigation >>> button.navbar-toggler {
  background-color: red;
  color: purple;
  transition: linear 1s;
}
.navigation >>> button.navbar-toggler:hover {
  background-color: lightcoral;
  transition: linear 1s;
}
</style>

