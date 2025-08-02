import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "turso",
  out: "./src/lib/db/migrations",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
    authToken: process.env.DATABASE_AUTH_TOKEN!,
  },
});
