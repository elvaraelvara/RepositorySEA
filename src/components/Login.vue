<template>
    <div>
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script>
  import { login } from '@/auth'
  
  export default {
    name: 'Login',
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login() {
        login(this.email, this.password)
          .then(() => {
            // Redirect ke halaman setelah login berhasil
            this.$router.push('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  