const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TasksController = require('./controllers/TasksController')
module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/tasks',
    TasksController.index)

  app.get('/tasks/:taskId',
  TasksController.show)

  app.put('/tasks/:taskId',
  TasksController.put)

  app.post('/tasks',
  TasksController.post)

  app.delete('/tasks/:taskId',
    TasksController.delete)
}