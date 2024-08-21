import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import projectRouter from './routes/projectRoutes';
const postgres = require('postgres');
dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const sql = postgres({
  host: PGHOST,
  database: PGDATABASE,
  username: PGUSER,
  password: PGPASSWORD,
  port: 5432,
  ssl: 'require',
  connection: {
    options: `project=${ENDPOINT_ID}`,
  },
});

async function getPgVersion() {
  const result = await sql`select version()`;
  console.log(result[0]);
}

getPgVersion();

app.use('/projects', projectRouter);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
