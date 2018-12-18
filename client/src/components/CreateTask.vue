<template>
  <v-layout>
    <v-flex xs8>
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
    </v-flex>
   <panel>
      <v-flex xs1 class="text-xs-right">
      <v-btn
       v-if="$store.state.isUserLoggedIn"
        dark
        class="mt-2"
        color="cyan darken-4"
        @click="create">
        <v-icon class="mr-2">add_circle</v-icon>
        Create
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
      required: (value) => !!value || 'Required.'
    }
  },
  methods: {
    async create () {
       this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.task)
        .every(key => !!this.task[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
       try {
        await TasksService.post(this.task)
        this.$router.push({
          name: 'tasks'
        })
      } catch (err) {
         // eslint-disable-next-line
        console.log(err)
      }
    }
   },
   components: {
     Panel
   }
}
</script>
 <style scoped>
</style>