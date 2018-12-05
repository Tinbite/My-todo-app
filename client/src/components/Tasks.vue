<template>
  <v-layout wrap align center>
    <v-flex xs6 offset-xs3>
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
                class="cyan darken-4"
                @click="navigateTo({
                  name: 'task-edit', 
                  params: {
                    taskId: task.id
                  }
                })">
                Edit
              </v-btn> 
            <v-btn
            dark
        class="cyan darken-4"
        @click="remove">
        Delete
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
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.tasks = (await TasksService.index()).data
  }
}
</script>
 <style scoped>
 .task-title {
  font-size: 25px;
}
 
</style>