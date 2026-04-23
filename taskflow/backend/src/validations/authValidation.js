import { body } from 'express-validator';

export const validateRegister = [
  body('name')
  .trim()
  .notEmpty()
  .withMessage('Name is required')
  .isLength({ min: 2 })
  .withMessage('Name must be at least 2 characters'),

  body('email')
  .trim()
  .isEmail()
  .withMessage('Valid email required')
  .normalizeEmail(),

  body('password')
  .trim()
  .isLength({ min: 6 })
  .withMessage('Password must be at least 6 characters'),

];

export const validateLogin = [
  body('email')
  .isEmail()
  .withMessage('Valid email is required')
  .normalizeEmail(),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];