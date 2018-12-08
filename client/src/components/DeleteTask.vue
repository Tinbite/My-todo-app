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
    </v-flex>
     <v-flex xs8>
       <div class="danger-alert" v-if="error">
        {{error}}
      </div>
       <v-btn
        dark
        class="cyan"
        @click="remove">
        Delete
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
    async remove () {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.task)
        .every(key => !!this.task[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
       this.taskId = this.$store.state.route.params.taskId
      try {
        await TasksService.delete(this.taskId)
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
      this.task = (await TasksService.show(taskId)).data.title
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