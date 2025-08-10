import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

const timestamps = {
  createdAt: integer("created_at", { mode: "timestamp" })
    .$default(() => new Date())
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp" }).$onUpdate(
    () => new Date()
  ),
};

/** users for admin */
export const users = sqliteTable("users", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  password: text("password").notNull(),
  ...timestamps,
});

/** post categories */
export const categories = sqliteTable("categories", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text("name").notNull().unique(),
  ...timestamps,
});

/** blog post */
export const posts = sqliteTable("posts", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  excerpt: text("excerpt").notNull(),
  content: text("content", { mode: "json" }),
  thumbnail: text("thumbnail").notNull(),
  draft: integer("draft", { mode: "boolean" }).default(sql`0`),
  categoryId: text("category_id").references(() => categories.id),
  ...timestamps,
});

/** projects */
export const projects = sqliteTable("projects", {
  id: text("id")
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  thumbnail: text("thumbnail").notNull(),
  tech: text("tech", { mode: "json" }).$type<string[]>(),
  githubUrl: text("github_url"),
  demoUrl: text("demo_url"),
  ...timestamps,
});

export type UsersInsert = typeof users.$inferInsert;
export type UsersSelect = typeof users.$inferSelect;

export type CategoryInsert = typeof categories.$inferInsert;
export type CategorySelect = typeof categories.$inferSelect;

export type PostsInsert = typeof posts.$inferInsert;
export type PostsSelect = typeof posts.$inferSelect;

export type ProjectsInsert = typeof projects.$inferInsert;
export type ProjectsSelect = typeof projects.$inferSelect;
