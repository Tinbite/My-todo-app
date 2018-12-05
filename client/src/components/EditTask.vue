<template>
  <v-layout>
    <v-flex xs4>
      <panel title="My Tasks">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="task.title"
        ></v-text-field>
      </panel>
       <div class="danger-alert" v-if="error">
        {{error}}
      </div>
       <v-btn
        dark
        class="cyan darken-4"
        @click="save">
        Save changes
      </v-btn>
    </v-flex>
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
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.task)
        .every(key => !!this.task[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
       const taskId = this.$store.state.route.params.taskId
      try {
        await TasksService.put(this.task)
        this.$router.push({
          name: 'tasks',
          params: {
            taskId: taskId
          }
        })
      } catch (err) {
        // eslint-disable-next-line
        console.log(err)
      }
    }
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