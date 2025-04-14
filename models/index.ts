import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
const ENV_FILE = process.env.ENV_FILE || ".env";
dotenv.config({ path: ENV_FILE });

// Database configuration
const DB_HOST = process.env.DB_HOST || "postgres";
const DB_PORT = parseInt(process.env.DB_PORT || "5432");
const DB_NAME = process.env.POSTGRES_DB || "baseapi";
const DB_USER = process.env.POSTGRES_USER || "postgres";
const DB_PASS = process.env.POSTGRES_PASSWORD || "postgres";
const DB_DIALECT = "postgres";

// Configure Sequelize
let sequelize: Sequelize;

sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

// Interface to manage models in Sequelize
interface DbInterface {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  [key: string]: any; // Allow adding models to this object
}

const db: DbInterface = {
  sequelize,
  Sequelize,
};

export default db;
