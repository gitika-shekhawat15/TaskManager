import express from 'express';
import {
  register,
  login,
  getMe,
} from '../controllers/authController.js';

import { validateRegister, validateLogin } from '../validations/authValidation.js';
import { validate } from '../middleware/validate.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Public routes
router.post('/register', validateRegister, validate, register);
router.post('/login', validateLogin, validate, login);

// Protected route
router.get('/me', protect, getMe);

export default router;