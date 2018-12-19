<template>
  <v-layout align center>
    <v-flex xs10 offset-xs1>
      <panel title="Tasks">
        <v-btn
   
          slot="action"
          @click="navigateTo({name: 'tasks-create'})"
          class="cyan accent-2"
          light
          medium
          absolute
          right
          middle
          fab>
          <v-icon>add</v-icon>
        </v-btn>
         <div 
          v-for="task in tasks"
          class="task"
          :key="task.id">
           <v-layout>
            <v-flex xs6>
              <div class="task-title">
                {{task.title}}
              </div>
              </v-flex>
            <v-flex xs1 class="text-xs-right">
           <v-btn
           
                dark
               outline small fab color="cyan darken-4"
                @click="navigateTo({
                  name: 'task-edit', 
                  params: {
                taskId: task.id
                  }
                })">
            <v-icon>edit</v-icon>
              </v-btn>
               </v-flex>  
               <v-flex xs1 class="text-xs-right">
              <v-btn
                dark
                
               outline small fab color="cyan darken-4"
             
                @click="navigateTo({
                  name: 'task-delete', 
                  params: {
                taskId: task.id
                  }
                })">
           <v-icon>delete</v-icon>
              </v-btn>

            </v-flex>
          </v-layout>
        </div>
       </panel> 
    </v-flex>
  </v-layout>
</template>
 <script>
 import {mapState} from 'vuex'
import TasksService from '@/services/TasksService'
import Panel from '@/components/Panel'
export default {
   
  components: {
    Panel
  },
  data () {
    return {
      tasks: null
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn',
      'user'
    ])
  },
  methods: {

    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    if(this.isUserLoggedIn){
     this.tasks = (await TasksService.index()).data 
    }
    
  },

}
</script>
 <style scoped>
 .task-title {
  font-size: 25px;
}
/* button{
  float: right;
} */
 
</style>