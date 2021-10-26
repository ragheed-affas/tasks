const Task = require('../models/task')
const asyncWrapper = require('../helpers/async-wrapper')

const getAllTasks = asyncWrapper(async(req, res, next) => {
  const tasks = await Task.find()
  res.status(200).json(tasks)
})

const createTask = asyncWrapper(async(req, res, next) => {
  if (req.body.task) {
    const task = new Task({...req.body, archived: false})
    const result = await task.save()
    res.status(200).json(result)
  } else {
    res.status(500).json({msg: 'errorrr'})
  }
})

const getTask = asyncWrapper(async(req, res, next) => {
  const task = await Task.findById(req.params.id)
  res.status(200).json(task)
})

const updateTask = asyncWrapper(async(req, res, next) => {
  const task = await Task.updateOne({_id: req.params.id}, req.body);
  res.status(200).json(task);
})

const deleteTask = asyncWrapper(async(req, res, next) => {
  const task = await Task.deleteOne({_id: req.params.id});
  res.status(200).json(task);
})

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
}