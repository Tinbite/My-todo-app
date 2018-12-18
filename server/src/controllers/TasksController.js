const {Task} = require('../models')
// const _ = require('lodash')


 module.exports = {
  async index (req, res) {
    
    try {
      const userId = req.user.id
      const {taskId}= req.query
      const where = {
        UserId: userId
      }
      if (taskId) {
        where.TaskId = taskId
      }
      const tasks = await Task.findAll({

        limit: 20
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
      const userId = req.user.id
      const {taskId}= req.body
      const task = await Task.findById(req.params.taskId, {
        TaskId: taskId,
        UserId: userId
      })
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the tasks'
      })
    }
  },
  async post  (req, res) {
    try {
      const userId = req.user.id
      const {taskId}= req.body
      const task = await Task.create(req.body,{
        TaskId: taskId,
        UserId: userId
      })
      
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
      const userId = req.user.id
      const {taskId} = req.params
      const task = await Task.findById(taskId,{
        UserId: userId
      })
      await task.destroy()
      res.send(task)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to delete the task'
      })
    }
  }
} 
