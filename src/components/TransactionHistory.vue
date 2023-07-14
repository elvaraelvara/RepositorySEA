<template>
    <div>
      <h2>Transaction History</h2>
      <ul>
        <li v-for="transaction in transactions" :key="transaction.id">
          <p>Movie: {{ transaction.movie }}</p>
          <p>Seat Number: {{ transaction.seatNumber }}</p>
          <p>Total Cost: {{ transaction.totalCost }}</p>
          <button @click="cancelTransaction(transaction.id)">Cancel</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TransactionHistory',
    data() {
      return {
        transactions: []
      }
    },
    created() {
      this.fetchTransactions()
    },
    methods: {
      fetchTransactions() {
        // Fetch transaction history from API for the current user
        // Example using Axios library
        axios.get('https://seleksi-sea-2023.vercel.app/api/transactions')
          .then(response => {
            this.transactions = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      cancelTransaction(transactionId) {
        // Logic to cancel the transaction and update transactions list
      }
    }
  }
  </script>
  