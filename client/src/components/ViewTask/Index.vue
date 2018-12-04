<!-- <template>
  <div>
    <v-layout>
      <v-flex xs6>
         
        <my-tasks :task="task" />
        
      </v-flex>
    </v-layout>
  </div>
</template>
 <script>

import MyTasks from './MyTasks'
import TasksService from '@/services/TasksService'
// import Panel from '@/components/Panel'
 export default {
 components: {
//     Panel,
     MyTasks
   },
  data () {
    return {
      task: {}
    }
  },
  async mounted () {
    const taskId = this.$store.state.route.params.taskId
    this.task = (await TasksService.show(taskId)).data
  }
}
</script>
 <style scoped>
</style>-->