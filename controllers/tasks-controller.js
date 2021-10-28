const Task = require('../models/task')
const asyncWrapper = require('../helpers/async-wrapper')
const { createCustomError } = require('../errors/custom-error')

const getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find()

  if (tasks) {
    res.status(200).json(tasks  )
  } else {
    next(createCustomError('no such a task', 404))
  }
})

const createTask = asyncWrapper(async (req, res, next) => {
  if (req.body.task) {
    const task = new Task({ ...req.body, archived: false })
    const result = await task.save()
    res.status(200).json(result)
  } else {
    next(createCustomError('task is empty', 404))
  }
})

const getTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findById(req.params.id)
  if (task) {
    res.status(200).json(task)
  } else {
    next(createCustomError('no such a task', 404))
  }
})

const updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.updateOne({ _id: req.params.id }, req.body);
  if (task) {
    res.status(200).json(task)
  } else {
    next(createCustomError('no such a task', 404))
  }
})

const deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.deleteOne({ _id: req.params.id });
  if (task) {
    res.status(200).json(task)
  } else {
    next(createCustomError('no such a task', 404))
  }
})

module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteTask,
  updateTask,
}