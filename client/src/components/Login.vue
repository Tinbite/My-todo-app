<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Login</h1>
        <v-text-field
          label="Email"
          placeholder="email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          placeholder="password"
          type="password"
          v-model="password"
        ></v-text-field>
        <br>
        <div class="danger-alert" v-html="error" />
        <br>
        <v-btn
          dark
          class="cyan darken-4"
           @click="navigateTo({name: 'tasks'})"
          >
          <v-icon class="mr-2">fingerprint</v-icon>
          Login
        </v-btn>
    </v-flex>
  </v-layout>
  </v-container>
</template>
 <script>
 
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
 <style scoped>
 h1 {
   color: darkcyan;
 }
</style>