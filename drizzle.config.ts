import { defineConfig } from "drizzle-kit";
import { env } from "process";

export default defineConfig({
    schema: "./src/drizzle/schema.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL as string,
    },
    verbose: true,
    strict: true
})