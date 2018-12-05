import Api from '@/services/Api'

 export default {
  index () {
    return Api().get('tasks')
  },
  show (taskId) {
    return Api().get(`tasks/${taskId}`)
  },
  post (task) {
    return Api().post('tasks', task)
  },
  put (task) {
    return Api().put(`tasks/${task.id}`, task)
  },
  delete (taskId) {
    return Api().delete(`tasks/${taskId}`)
  }

}