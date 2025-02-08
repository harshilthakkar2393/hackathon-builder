import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import { env } from 'process';

const migrationClient = postgres(env.DATABASE_URL as string, { max: 1 });

async function main() {
    await migrate(drizzle(migrationClient), {
        migrationsFolder: "./src/drizzle/migrations"
    })
    await migrationClient.end()
}

main()

console.log("DATABASE_URL:", process.env.DATABASE_URL);
