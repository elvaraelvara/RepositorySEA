import firebase from 'firebase/app'
import 'firebase/auth'

// Mendapatkan instance objek autentikasi dari Firebase
const auth = firebase.auth()

// Fungsi untuk melakukan registrasi pengguna baru
export function register(email, password) {
  return auth.createUserWithEmailAndPassword(email, password)
}

// Fungsi untuk melakukan login pengguna
export function login(email, password) {
  return auth.signInWithEmailAndPassword(email, password)
}

// Fungsi untuk melakukan logout pengguna
export function logout() {
  return auth.signOut()
}

// Fungsi untuk mendapatkan status autentikasi saat ini
export function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      unsubscribe()
      resolve(user)
    }, reject)
  })
}
