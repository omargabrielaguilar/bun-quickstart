import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./schema";

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "mypass",
    database: "retcorspeed",
});

export const db = drizzle(pool, { schema });
