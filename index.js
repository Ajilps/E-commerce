import dotenv from "dotenv";
import { connectDB } from "./db/index.js";
import { app } from "./app.js";
import path from "path";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    console.log("Database connected");
    app.listen(process.env.PORT || 3000, (err) => {
      console.log(
        err
          ? err
          : `Server is running on port http://localhost:${process.env.PORT || 3000}`,
      );
    });
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err);
    process.exit(1);
  });

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});
