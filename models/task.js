const mongoose = require('mongoose');

const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  done: Boolean,
  archived: Boolean,
}, {timestamps: true})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;