import { pgTable, varchar, uuid } from "drizzle-orm/pg-core"

export const users = pgTable("user", {
    id: uuid("id").primaryKey().defaultRandom(),
    firstName: varchar("firstName", { length: 255 }).notNull(),
    lastName: varchar("lastName", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().primaryKey(),
})