<template>
  <v-layout>
    <v-flex xs4>
      <panel title="tasks">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="task.title"
        ></v-text-field>
      </panel>
   
       <v-btn
        dark
        class="cyan darken-4"
        @click="remove">
        sure to delete
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
    //   required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async remove () {
    //   this.error = null
    //   const areAllFieldsFilledIn = Object
        // .keys(this.task)
        // .every(key => !!this.task[key])
    //   if (!areAllFieldsFilledIn) {
        // this.error = 'Please fill in all the required fields.'
        // return
    //   }
       this.taskId = this.$store.state.route.params.taskId
      try {
        await TasksService.delete(this.taskId)
         this.$router.push({
          name: 'tasks'
        })
        //  this.task = null

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