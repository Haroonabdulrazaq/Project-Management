import { body } from 'express-validator';

const fieldValidation = [
  body('name')
    .not()
    .isEmpty()
    .withMessage('name is required')
    .isLength({ min: 5 })
    .withMessage('name length cannot be less than 5'),
  body('description'),
  body('due_date').not().isEmpty().withMessage('Due date is required'),
];

export default fieldValidation;
