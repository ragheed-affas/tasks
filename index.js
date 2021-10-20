const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const Task = require('./models/task');

const mongoUrl = process.env['mongoUrl']
const app = express();


async function start() {
  await mongoose.connect(mongoUrl)
  console.log('CONNECTED')

  app.use(cors())

  app.get('/add-task', async (req, res) => {
    const task = new Task({
      task: 'make it work!',
      done: false,
    })

    try {
      const result = await task.save();
      res.send(result);
    } catch (err) {
      res.send(err);
    }
  })

  app.get('/', async (req, res) => {
    try {
      const tasks = await Task.find()
      res.send(tasks)
    } catch (err) {
      res.send(err)
    }
  });

  app.listen(3000, () => {
    console.log('server started');
  });
}

start().catch(err => console.log('connection error', err));


