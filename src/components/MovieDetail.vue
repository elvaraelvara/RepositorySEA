<template>
    <div>
      <h2>{{ movie.title }}</h2>
      <p>{{ movie.description }}</p>
      <p>Rating: {{ movie.age_rating }}</p>
      <p>Price: {{ movie.ticket_price }}</p>
      <router-link :to="'/movies/' + movie.id + '/booking'">Book Tickets</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MovieDetail',
    data() {
      return {
        movie: {}
      }
    },
    created() {
      this.fetchMovie()
    },
    methods: {
      fetchMovie() {
        const movieId = this.$route.params.id
        // Fetch movie data from API based on movieId
        // Example using Axios library
        axios.get(`https://seleksi-sea-2023.vercel.app/api/movies/${movieId}`)
          .then(response => {
            this.movie = response.data
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
  </script>
  