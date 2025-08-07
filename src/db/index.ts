import "dotenv/config";

import { drizzle } from "drizzle-orm/node-postgres";
// URL BANCO DE DADOS
export const db = drizzle(process.env.DATABASE_URL!);
