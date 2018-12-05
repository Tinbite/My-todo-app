const {Task} = require('../models')
 module.exports = {
  async index (req, res) {
    try {
      const tasks = await Task.findAll({
        limit: 10
      })
      res.send(tasks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the tasks'
      })
    }
  },
  async show (req, res) {
    try {
      const task = await Task.findById(req.params.taskId)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the tasks'
      })
    }
  },
  async post (req, res) {
    try {
      const task = await Task.create(req.body)
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the task'
      })
    }
  },
  async put (req, res) {
    try {
      const task = await Task.update(req.body, {
        where: {
          id: req.params.taskId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the task'
      })
    }
  },
  async delete (req, res) {
    try {
      const {taskId} = req.params
      const task = await Task.findById(taskId)
      await task.destroy()
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the task'
      })
    }
  }
} 