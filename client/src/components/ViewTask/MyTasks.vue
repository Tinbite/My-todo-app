<!-- <template>
  <panel title="My Tasks">
    <v-layout>
      <v-flex xs6>
        <div class="task-title">
          {{task.title}}
        </div>
         <v-btn
          dark
          class="cyan"
          @click="navigateTo({
            name: 'task-edit', 
            params: {
              taskId: task.id
            }
          })">
          Edit
        </v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>
 <script>
import Panel from '@/components/Panel'
 export default {
  props: [
    'task'
  ],
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  components: {
    Panel
  }
}
</script>
 <style scoped>
.task {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
 .task-title {
  font-size: 30px;
}
 
</style>
-->