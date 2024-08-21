import express, { Request, Response } from 'express';
import {
  getAllProjects,
  createProject,
} from '../controllers/projects.controller';

const projectRouter: express.Router = express.Router();
const logger = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log('Project Router');
  next();
};

projectRouter.get('/', logger, getAllProjects);

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
