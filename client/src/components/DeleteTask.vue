<template>
  <v-layout>
    <v-flex xs4>
      <panel title="tasks">
        <v-text-field
          label="Title"
          v-model="task.title"
          readonly
        ></v-text-field>
      </panel>
   </v-flex>
   <panel>
     <v-flex xs1 class="text-xs-right">
       <v-btn
        dark
        class="cyan darken-4"
        @click="remove">
        sure to delete
      </v-btn>
    </v-flex>
     </panel>
  </v-layout>
</template>
 <script>
import Panel from '@/components/Panel'
import TasksService from '@/services/TasksService'
 export default {
  data () {
    return {
      task: {
        title: null
      },
      error: null,
    
    }
  },
  methods: {
    async remove () {
       this.taskId = this.$store.state.route.params.taskId
      try {
        await TasksService.delete(this.taskId)
         this.$router.push({
          name: 'tasks'
        })
       

      } catch (err) {
        // eslint-disable-next-line
        console.log(err)
      }
    },
  },
  async mounted () {
    try {
       const taskId = this.$store.state.route.params.taskId
      this.task = (await TasksService.show(taskId)).data
    } catch (err) {
        // eslint-disable-next-line
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>
 <style scoped>
</style>