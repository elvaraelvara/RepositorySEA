<template>
    <div>
      <h1>SEA Cinema</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <router-link :to="'/movies/' + movie.id">{{ movie.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
    data() {
      return {
        movies: []
      }
    },
    created() {
      this.fetchMovies()
    },
    methods: {
      fetchMovies() {
        // Fetch movies data from API
        // Example using Axios library
        axios.get('https://seleksi-sea-2023.vercel.app/api/movies')
          .then(response => {
            this.movies = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  