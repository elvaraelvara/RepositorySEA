<template>
    <div>
      <h2>Register</h2>
      <form @submit.prevent="register">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Register</button>
      </form>
    </div>
  </template>
  
  <script>
  import { register } from '@/auth'
  
  export default {
    name: 'Register',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      register() {
        register(this.email, this.password)
          .then(() => {
            // Redirect ke halaman setelah registrasi berhasil
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  