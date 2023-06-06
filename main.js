// Import the required Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA01r55OhBoD_-lMSGTcTNny5jWHqroqkE",
  authDomain: "bestagon-4eda5.firebaseapp.com",
  projectId: "bestagon-4eda5",
  storageBucket: "bestagon-4eda5.appspot.com",
  messagingSenderId: "576359900133",
  appId: "1:576359900133:web:6308a82bcde5da1a7b850c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

new Vue({
  el: '#app',
  data() {
    return {
      email: '',
      password: '',
      loginError: ''
    }
  },
  methods: {
    signIn() {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Login successful, do something here (e.g., redirect to another page)
          console.log('User:', userCredential.user);
        })
        .catch((error) => {
          // Login failed, display error message
          this.loginError = error.message;
        });
    }
  }
});
