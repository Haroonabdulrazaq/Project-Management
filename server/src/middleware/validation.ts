import { body } from 'express-validator';

const fieldValidation = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('name is required')
    .isString()
    .withMessage('name must be a string')
    .isLength({ min: 5 })
    .withMessage('name length cannot be less than 5'),
  body('description')
    .optional()
    .isString()
    .withMessage('description must be a string')
    .isLength({ max: 200 })
    .withMessage('description cannot be longer than 200 characters'),
  body('due_date')
    .not()
    .isEmpty()
    .withMessage('due date is required')
    .isISO8601()
    .withMessage('due date must be a valid date'),
];

export default fieldValidation;
