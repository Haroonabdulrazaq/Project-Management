import express, { Request, Response } from 'express';
import {
  getAllProjects,
  createProject,
} from '../controllers/projects.controller';
import logger from '../middleware/logger';

const projectRouter: express.Router = express.Router();

projectRouter.get('/', getAllProjects);

projectRouter.get('/:id', (req: express.Request, res: express.Response) => {
  res.status(200).send(`Get projectById`);
});

projectRouter.post('/', createProject);

projectRouter.patch('/:id', (req: express.Request, res: express.Response) => {
  res.status(200).send(`Edit a projectById`);
});

projectRouter.delete('/:id', (req: express.Request, res: express.Response) => {
  res.status(200).send(`Delete a projectById`);
});

export default projectRouter;
