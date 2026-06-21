import { Router } from "express";
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = Router();
console.log("✅ task.routes.js loaded")
// All routes protected
// router.use(protect);

router.get("/", getTasks);           // GET /api/tasks?search=...
router.get("/:id", getTaskById);     // GET /api/tasks/:id
router.post("/", createTask);        // POST /api/tasks
router.put("/:id", updateTask);      // PUT /api/tasks/:id
router.delete("/:id", deleteTask);   // DELETE /api/tasks/:id

export default router;