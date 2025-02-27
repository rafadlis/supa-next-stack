import "dotenv/config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// For hot reloading in development
declare global {
  // eslint-disable-next-line no-var
  var postgresClient: ReturnType<typeof postgres> | undefined;
}

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set");
}

// Use global variable to prevent multiple connections in development
const client =
  globalThis.postgresClient ||
  postgres(connectionString, {
    max: 1,
    idle_timeout: 20,
    connect_timeout: 10,
    prepare: false,
  });

if (process.env.NODE_ENV === "development") {
  globalThis.postgresClient = client;
}

export async function createDrizzleClient() {
  const db = drizzle({ client, schema });
  return db;
}
