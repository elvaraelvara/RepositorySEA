import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'

Vue.config.productionTip = false

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKMKpZN9BZV3mVjNvwKy6AiWGbjHgqDRk",
    authDomain: "pass-a6741.firebaseapp.com",
    projectId: "pass-a6741",
    storageBucket: "pass-a6741.appspot.com",
    messagingSenderId: "950579145531",
    appId: "1:950579145531:web:c1e3fbf0cce091a036e51e"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
