<template>
  <v-toolbar fixed class="cyan darken-4" dark>
    <v-toolbar-title class="mr-4">
      <router-link
         dark
        class="home"
         :to="{
          name: 'root'
        }">
         My Todo 
       </router-link>
    </v-toolbar-title>
     <v-toolbar-items>
       <v-btn
       v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        :to="{
          name: 'tasks'
        }">
        <v-icon class="mr-2">playlist_add_check</v-icon>
        Tasks
      </v-btn>
      </v-toolbar-items>
    <v-spacer></v-spacer>
<v-toolbar-items>
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
       :to="{
          name: 'login'
        }">
        <v-icon class="mr-2">fingerprint</v-icon>
        Login
      </v-btn>
      
      <v-btn 
        v-if="!$store.state.isUserLoggedIn"
        flat 
        dark
       :to="{
          name: 'register'
        }">
        <v-icon class="mr-2">account_box</v-icon>
        Sign Up
      </v-btn>
       <v-btn 
        v-if="$store.state.isUserLoggedIn"
        flat 
        dark
        @click="logout">
        <v-icon class="mr-2">exit_to_app</v-icon>
        Log Out
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
 <script>
 
export default {
  computed: {
  token() {
    return this.$store.getters.token
  }
  },
  methods: {
  logout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
      this.$router.push({
        name: 'root'
      })
}
}
}
</script>
 <style scoped>
.home { 
  color:white;
  cursor: pointer;
}
 .home:hover {
  color: cyan;
}
</style>