new Vue({
  el: '#app',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn() {
      // Perform sign-in logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }
});