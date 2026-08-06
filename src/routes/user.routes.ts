import express from "express";

import {
  getUsers,
  adminDashboard,
  teamLeadDashboard,
  employeeDashboard,
} from "../controllers/user.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

// Get All Users
router.get("/", getUsers);

// Admin Dashboard
router.get(
  "/admin",
  protect,
  authorize("admin"),
  adminDashboard
);

// router.get(
//   "/hr",
//   protect,
//   authorize("hr", "admin"),
//   hrDashboard
// );

// Team Lead Dashboard
router.get(
  "/team-lead",
  protect,
  authorize("teamLead", "admin"),
  teamLeadDashboard
);

// Employee Dashboard
router.get(
  "/employees",
  protect,
  authorize("employee", "teamLead", "admin"),
  employeeDashboard
);

export default router;