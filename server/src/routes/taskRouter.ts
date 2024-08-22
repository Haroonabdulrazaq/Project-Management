import express from 'express';
import { PrismaClient } from '@prisma/client';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controller';
import logger from '../middleware/logger';
import { taskFieldValidation } from '../middleware/validation';

const taskRouter: express.Router = express.Router({ mergeParams: true });
const prisma = new PrismaClient();

taskRouter.get('/', logger, getAllTasks);

taskRouter.post('/', logger, taskFieldValidation, createTask);

taskRouter.put('/:taskId', logger, taskFieldValidation, updateTask);

taskRouter.delete('/:taskId', logger, deleteTask);

export default taskRouter;
