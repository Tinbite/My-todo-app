import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Tasks from '@/components/Tasks'
import CreateTask from '@/components/CreateTask'
import EditTask from '@/components/EditTask'
import ViewTask from '@/components/ViewTask/Index'

Vue.use(Router)

export default new Router ({
    routes: [
    {
    path: '/',
    name: 'root',
    component: HelloWorld
    },
    {
        path: '/register',
        name: 'register',
        component: Register
      },{
      path: '/login',
      name: 'login',
      component: Login 
      },
      {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
      },
      {
        path: '/tasks/create',
        name: 'tasks-create',
        component: CreateTask
        },
        {
            path: '/tasks/:taskId',
            name: 'task',
            component: ViewTask
          },
        {
            path: '/tasks/:taskID/edit',
            name: 'task-edit',
            component: EditTask
            }
]
})