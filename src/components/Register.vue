<template>
  <b-form @submit="onSubmit" @reset="onReset">
    <b-form-group
      id="input-group-1"
      label="Email address:"
      label-for="input-1"
      description="We'll never share your email with anyone else."
    >
      <b-form-input
        id="input-1"
        v-model="form.email"
        type="email"
        required
        placeholder="Enter email"
      ></b-form-input>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>

        <b-form-group id="input-group-3" label="Password:" label-for="input-3">
          <b-form-input type="password" id="input-3" v-model="form.password" required placeholder="Enter password"></b-form-input>
        </b-form-group>
      </b-form-group>
    </b-form-group>
  </b-form>
</template>
<script>
export default {
  name: "Register",
  data() {
    return {
      form: {}
    };
  }, 
  methods: {
      onSubmit (){

      },
      onReset (){

      },
      
  }
};
</script>
<style>
</style>
