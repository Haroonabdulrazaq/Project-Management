import express from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from '../controllers/projects.controller';
import logger from '../middleware/logger';
import { projectFieldValidation } from '../middleware/validation';

const projectRouter: express.Router = express.Router();

projectRouter.get('/', logger, getAllProjects);

projectRouter.get('/:id', logger, getProjectById);

projectRouter.post('/', logger, projectFieldValidation, createProject);

projectRouter.put('/:id', logger, projectFieldValidation, updateProject);

projectRouter.delete('/:id', logger, deleteProject);

export default projectRouter;
