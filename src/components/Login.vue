<template>
  <div class="Login">
    <h1>Artist Login</h1>
    <b-container>
      <b-row>
        <b-col>
          <h2>Login</h2>
        </b-col>
        <b-col>
          <b-form-input type="text" v-model="username" placeholder="Login"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <h2>Password</h2>
        </b-col>
        <b-col>
          <b-form-input type="text" v-model="password" placeholder="Password"/>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button @click="login()">Login</b-button>
        </b-col>
      </b-row>
    </b-container>
    <button type="button" class="btn btn-secondary">Forgot Your Password</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data: function() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      axios.post(
        "http://localhost:3000/checkLogin",
        {
          username: this.username,
          password: this.password
        },
        {
          withCredentials: true
        }
      );
    }
  }
};
</script>

<style lang="scss">
.Login {
  h1 {
    font-size: 20px;
  }
  h2 {
    font-size: 50px;
  }
  h3 {
    font-size: 20px;
    margin: 20px 0 0;
    margin-bottom: 20px;
  }
  a:hover {
    background-color: lightcoral;
  }
}
</style>