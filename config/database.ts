import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Determine which .env file to load
const ENV_FILE = process.env.ENV_FILE || ".env";
dotenv.config({ path: ENV_FILE });
console.log(`Loaded environment file: ${ENV_FILE}`); // Debugging

// Database settings from .env
const DB_DIALECT = 'postgres';
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = parseInt(process.env.DB_PORT || "5432");
const DB_NAME = process.env.POSTGRES_DB || "baseapi";
const DB_USER = process.env.POSTGRES_USER || "postgres";
const DB_PASS = process.env.POSTGRES_PASSWORD || "postgres";

let sequelize: Sequelize;

sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

// Sequelize configuration based on dialect

// Define interface for the database object
interface DbInterface {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  [key: string]: any; // Allow dynamic properties
}

const db: DbInterface = {
  sequelize,
  Sequelize,
};

export default db;
