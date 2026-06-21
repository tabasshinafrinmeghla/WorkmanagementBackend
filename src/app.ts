import express from "express";
import cors from "cors";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";
import taskRoutes from "./routes/task.routes"; // ✅ NEW

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Root route
app.get("/", (_, res) => {
  res.send("Backend Running Successfully");
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
console.log("✅ app.js loaded");
// ✅ Task Routes (NEW)
app.use("/api/tasks", taskRoutes);

export default app;