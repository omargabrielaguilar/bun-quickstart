import { mysqlTable, varchar, int, serial } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    email: varchar("email", {
        length: 255,
    }),
});
