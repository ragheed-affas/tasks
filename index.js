const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/tasks-routes');
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')
const Task = require('./models/task');

const mongoUrl = process.env.MONGO_URL
const port = process.env.PORT

const app = express();

app.use(cors())
app.use(express.json())

async function start() {
  try {
    await mongoose.connect(mongoUrl)
    console.log('CONNECTED')

    app.use('/api/v1/tasks', router);
    app.use(notFound)
    app.use(errorHandler)

    app.listen(port || 3000, () => {
      console.log('server started');
    });
  } catch (err) {
    console.log(`could not connect to db ${err}`)
  }
}

start().catch(err => console.log('connection error', err));


