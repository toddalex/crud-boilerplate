import { Pool } from 'pg';
require('dotenv').config();

const POSTGRES = process.env.PG_URI

export const pool = new Pool({
  connectionString: POSTGRES
});

// module.exports = {
//   query: (text: string, params: any, callback: ()=>void) => {
//     console.log('executed query', text);
//     return pool.query(text, params, callback);
//   }
// };