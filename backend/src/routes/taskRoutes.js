import express from 'express';

import {
  createTask,
  getTasks,
  getTask,
  updateTask,
  deleteTask,
} from '../controllers/taskController.js';

import { protect } from '../middleware/auth.js';
import { authorize } from '../middleware/role.js';

import {
  validateCreateTask,
  validateUpdateTask,
} from '../validations/taskValidation.js';

import { validate } from '../middleware/validate.js';

const router = express.Router();

//  Protect all routes
router.use(protect);

// Create Task
router.post('/', validateCreateTask, validate, createTask);

// Get all task
router.get('/', getTasks);

// Get single task
router.get('/:id', getTask);

// Update task
router.put('/:id', validateUpdateTask, validate, updateTask);

// Delete task (admin only)
router.delete('/:id', deleteTask);

export default router;