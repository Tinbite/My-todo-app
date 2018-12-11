const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const TasksController = require('./controllers/TasksController')
// const isAuthenticated = require('./policies/isAuthenticated')

module.exports = (app) => {
  app.post('/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/login',
    AuthenticationController.login)

    app.get('/tasks',
    // isAuthenticated,
    TasksController.index)

  app.get('/tasks/:taskId',
  // isAuthenticated,
  TasksController.show)

  app.put('/tasks/:taskId',
  // isAuthenticated,
  TasksController.put)

  app.post('/tasks',
  // isAuthenticated,
  TasksController.post)

  app.delete('/tasks/:taskId',
  // isAuthenticated,
    TasksController.delete)
}