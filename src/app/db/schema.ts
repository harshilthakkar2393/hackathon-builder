/*import { drizzle } from 'drizzle-orm/node-postgres';

// Database connection string
const db = drizzle({
    connection: {
        connectionString: process.env.DATABASE_URL,
        ssl: true
    }
});

const result = await db.execute('select 1');

export { result };*/

import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
});

await client.connect();
export const db = drizzle(client);
