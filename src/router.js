import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import MovieDetail from './components/MovieDetail.vue'
import TicketBooking from './components/TicketBooking.vue'
import TransactionHistory from './components/TransactionHistory.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/movies/:id/booking',
    name: 'TicketBooking',
    component: TicketBooking
  },
  {
    path: '/transactions',
    name: 'TransactionHistory',
    component: TransactionHistory
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
