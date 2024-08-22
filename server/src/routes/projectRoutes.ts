import express, { Request, Response } from 'express';
import {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
} from '../controllers/projects.controller';
import logger from '../middleware/logger';
import fieldValidation from '../middleware/validation';

const projectRouter: express.Router = express.Router();

projectRouter.get('/', getAllProjects);

projectRouter.get('/:id', getProjectById);

projectRouter.post('/', fieldValidation, createProject);

projectRouter.put('/:id', fieldValidation, updateProject);

projectRouter.delete('/:id', (req: express.Request, res: express.Response) => {
  res.status(200).send(`Delete a projectById`);
});

export default projectRouter;
