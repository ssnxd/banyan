import type { DB } from "./types";
import SQLite from 'better-sqlite3';
import type { Dialect } from 'kysely';
import { Kysely, SqliteDialect } from 'kysely';
import { env } from "./env";

export const dialect: Dialect = new SqliteDialect({
	database: new SQLite(env.DATABASE_URL),
});

export const db = new Kysely<DB>({
	dialect,
});

