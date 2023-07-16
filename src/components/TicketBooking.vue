<template>
    <div>
      <h2>Ticket Booking</h2>
      <h3>{{ movie.title }}</h3>
      <p>Available Seats: {{ availableSeats }}</p>
      <form @submit.prevent="bookTicket">
        <label for="seatNumber">Seat Number:</label>
        <input type="number" id="seatNumber" v-model="seatNumber" min="1" max="64" required>
        <label for="name">Name:</label><template>
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
import axios from 'axios';

export default {
  name: 'TicketBooking',
  data() {
    return {
      movie: {},
      availableSeats: 64,
      seatNumber: null,
      name: '',
      age: null
    };
  },
  created() {
    this.fetchMovie();
  },
  methods: {
    fetchMovie() {
      const movieId = this.$route.params.id;
      axios
        .get(`https://seleksi-sea-2023.vercel.app/api/movies/${movieId}`)
        .then((response) => {
          this.movie = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    bookTicket() {
      if (this.availableSeats > 0) {
        this.availableSeats -= 1;
      }
        .post('https://seleksi-sea-2023.vercel.app/api/bookings', {
          movieId: this.movie.id,
          seatNumber: this.seatNumber,
          name: this.name,
          age: this.age,
        })
        .then((response) => {
          // Handle successful booking
          console.log('Ticket booked successfully!');
        })
        .catch((error) => {
          // Handle booking error
          console.log('Failed to book the ticket:', error);
        });
    },
  },
};
</script>

        
  
