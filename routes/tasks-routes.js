const express = require('express');
const taskController = require('../controllers/tasks-controller');

const router = express.Router();

// GETs
router.get('/:id', taskController.getTask);
router.get('/', taskController.getAllTasks);

// POSTs
router.post('/', taskController.createTask);

// UPDATEs
router.patch('/:id', taskController.updateTask)


// DELETEs
router.delete('/:id', taskController.deleteTask);


module.exports = router