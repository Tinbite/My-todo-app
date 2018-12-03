import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Register from '@/components/Register'

Vue.use(VueRouter)

export default new VueRouter ({
    routes: [
    {
    path: '/',
    name: 'Hello',
    component: HelloWorld
    },
    {
        path: '/register',
        name: 'register',
        component: Register
      }

]
})