
<template>
  <v-container>
   <v-layout wrap align center> 
    <v-flex xs6 offset-xs3>
      <h1>Register</h1>
        <v-text-field
          label="Email"
          placeholder="email"
         v-model="email"
        ></v-text-field>

        <v-text-field
          label="Password"
          type="password"
          placeholder="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
           <br>
           <div class="danger-alert" v-html="error" />
           <br>
       
        <v-btn
         dark
            class="cyan darken-4"
            @click="register">
            <v-icon class="mr-2">account_circle</v-icon>
            Register
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
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
          name: 'tasks'
        })
     
     } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
 <style scoped>
 h1{
   color: darkcyan;
 }
 </style>