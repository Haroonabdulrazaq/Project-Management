import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} from '../controllers/tasks.controller';
import logger from '../middleware/logger';
// import fieldValidation from '../middleware/validation';

const taskRouter: express.Router = express.Router({ mergeParams: true });
const prisma = new PrismaClient();

taskRouter.get('/', logger, getAllTasks);

taskRouter.post('/', createTask);

taskRouter.put('/:taskId', updateTask);

taskRouter.delete('/:taskId', deleteTask);

export default taskRouter;
