import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";

// URL BANCO DE DADOS
import * as schema from "./schema";
export const db = drizzle(process.env.DATABASE_URL!, {
  schema,
});
