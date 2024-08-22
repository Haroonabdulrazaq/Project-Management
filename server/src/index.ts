import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import projectRouter from './routes/projectRoutes';
import { prismaDisconnectMiddleware } from './middleware/prismaDisconnect';
import { getPgVersion } from './models/DBconnection';

dotenv.config();

const app = express();
const port = process.env.PORT;
// get form body data
app.use(express.json());

//DB connections
getPgVersion();

//Routes
app.use('/projects', projectRouter);

app.use(prismaDisconnectMiddleware);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
