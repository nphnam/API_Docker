import express, { Application, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";

// Import models - these imports will initialize the models
import db from "./models";
import "./models/role";
import "./models/folder";
import "./models/set";
import "./models/card";
import "./models/userSession";
import "./models/userProgress";
import "./models/image";
import "./models/user";

// Import routers
import userRouter from "./routes/userRoutes";
import folderRouter from "./routes/folderRoutes";
import setRouter from "./routes/setRoutes";
import cardRouter from "./routes/cardRoutes";
import userSessionRouter from "./routes/userSessionRoutes";
import userProgressRouter from "./routes/userProgressRoutes";
import imageRouter from "./routes/imageRoutes";

import { ErrorMiddleWare } from "./middleware/error";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(
  cors({
    origin: process.env.ORIGIN ? JSON.parse(process.env.ORIGIN) : ["http://localhost:3000"],
    credentials: true,
  })
);

// Test database connection
const testDatabaseConnection = async () => {
  try {
    console.log('Attempting to connect to database...');
    await db.sequelize.authenticate();
    console.log('Database connected successfully!');
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    console.error("Please check your database configuration in .env");
    console.error("Make sure your database is running and accessible");
  }
};

// Routes
app.use("/api/v1/auth", userRouter);
app.use("/api/v1/folder", folderRouter);
app.use("/api/v1/set", setRouter);
app.use("/api/v1/card", cardRouter);
app.use("/api/v1/session", userSessionRouter);
app.use("/api/v1/image", imageRouter);
app.use("/api/v1/user-progress", userProgressRouter);

// Root route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the API!");
});

// Error handling middleware
app.use(ErrorMiddleWare);

// Start server
const startServer = async () => {
  await testDatabaseConnection(); // Test database connection

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
};

startServer();
