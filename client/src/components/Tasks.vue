<template>
  <v-layout wrap align center>
    <v-flex xs8 offset-xs3>
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
            
           <v-btn
                dark
               color="cyan darken-4"
                @click="navigateTo({
                  name: 'task-edit', 
                  params: {
                taskId: task.id
                  }
                })">
           <v-icon>create</v-icon>
              </v-btn>  
            <v-btn
            dark
        class="cyan darken-4"
        @click="taskdelete">
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
  methods: {
   async taskdelete () {
   this.taskId = this.$store.state.route.params.taskId

      try {
        await TasksService.delete(this.taskId)
         this.task = null
      } catch (err) {
        // eslint-disable-next-line
        console.log(err)
      }
    },
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.tasks = (await TasksService.index()).data
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