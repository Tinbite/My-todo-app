<!--<template>
    <v-layout wrap align center> 
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan darken-4" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
             <form 
            name="tab-tracker-form"
            autocomplete="off">
            <v-text-field
              label="Email"
              placeholder="email"
              v-model="email"
            ></v-text-field>
            <br>
            <v-text-field
              label="Password"
              type="password"
              placeholder="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
<v-alert type="error" :value="registerError">
          {{registerError}}
        </v-alert>
           <br> 
           <div class="error" v-html="error" />
           <br> 
          <v-btn
            dark
            class="cyan darken-4"
            @click="register">
            <v-icon class="mr-2">account_circle</v-icon>
            Register
          </v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>

</template>-->
<template>
  <v-container>
   <v-layout wrap align center> 
    <v-flex xs6 offset-xs3>
      <h1>Register</h1>
     <!-- <panel title="Register"> -->
        <!-- <form 
          name="my-todo-form"
          autocomplete="off"> -->

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
         <!-- <v-alert type="error" value="error"> -->
          <!-- {{registerError}} -->
        <!-- </v-alert> -->
       
        <v-btn dark
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