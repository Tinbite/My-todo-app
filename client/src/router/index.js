import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Tasks from '@/components/Tasks'
import CreateTask from '@/components/CreateTask'
import EditTask from '@/components/EditTask'
import DeleteTask from '@/components/DeleteTask'



Vue.use(Router)

export default new Router ({
    routes: [
    {
    path: '/',
    name: 'root',
    component: HelloWorld,
    meta: {
        requireAuth: true,
    }

    },
    {
        path: '/register',
        name: 'register',
        component: Register,
        meta: {
            requireVisitor: true,
        }
      },{
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
          requireVisitor: true,
      }
      },
      {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
      },
      {
        path: '/tasks/create',
        name: 'tasks-create',
        component: CreateTask,
        },
      
        {
            path: '/tasks/:taskID/edit',
            name: 'task-edit',
            component: EditTask,
            },
            {
                path: '/tasks/:taskID/delete',
                name: 'task-delete',
                component: DeleteTask,
                }
]
})
