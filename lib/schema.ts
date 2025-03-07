import { pgTable, varchar, timestamp, index } from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const usersTable = pgTable(
  "users",
  {
    userId: varchar({ length: 255 }).primaryKey(),
    name: varchar({ length: 255 }).notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
    phoneNumber: varchar({ length: 255 }).notNull().unique(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [
    index("email_idx").on(table.email),
    index("phone_number_idx").on(table.phoneNumber),
    index("user_id_idx").on(table.userId),
  ]
);

export const userRolesTable = pgTable(
  "user_roles",
  {
    userId: varchar({ length: 255 }).references(() => usersTable.userId),
    role: varchar({ length: 255 }).notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
  },
  (table) => [index("user_id_idx").on(table.userId)]
);

export const UsersRelations = relations(usersTable, ({ many }) => ({
  userRoles: many(userRolesTable),
}));

export const UserRolesRelations = relations(userRolesTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [userRolesTable.userId],
    references: [usersTable.userId],
  }),
}));
