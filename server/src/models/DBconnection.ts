const postgres = require('postgres');
import dotenv from 'dotenv';
dotenv.config();

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

export async function getPgVersion() {
  try {
    await sql`select version()`;
    console.log('DB connected successfully');
  } catch (error) {
    console.error('DB connection error');
    console.error(error);
  }
}
