import express from 'express';
// import {
//   getAllProjects,
//   getProjectById,
//   createProject,
//   updateProject,
//   deleteProject,
// } from '../controllers/projects.controller';
// import logger from '../middleware/logger';
// import fieldValidation from '../middleware/validation';

const taskRouter: express.Router = express.Router();

taskRouter.get('/', (req, res) => {
  console.log('Params:', req.params);
  console.log('Query:', req.query);
  res.status(200).json('get all tasks');
});

taskRouter.get('/:id', () => {
  console.log('get task by id');
});

taskRouter.post('/', () => {
  console.log('create a task');
});

taskRouter.put('/:id', () => {
  console.log('Edit a task');
});

taskRouter.delete('/:id', () => {
  console.log('delete a task');
});

export default taskRouter;
