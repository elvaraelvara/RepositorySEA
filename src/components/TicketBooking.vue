<template>
    <div>
      <h2>Ticket Booking</h2>
      <h3>{{ movie.title }}</h3>
      <p>Available Seats: {{ availableSeats }}</p>
      <form @submit.prevent="bookTicket">
        <label for="seatNumber">Seat Number:</label>
        <input type="number" id="seatNumber" v-model="seatNumber" min="1" max="64" required>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="age" min="1" required>
        <button type="submit">Book</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TicketBooking',
    data() {
      return {
        movie: {},
        availableSeats: 64,
        seatNumber: null,
        name: '',
        age: null
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
      },
      bookTicket() {
        // Logic to book the ticket and update availableSeats
      }
    }
  }
  </script>
  