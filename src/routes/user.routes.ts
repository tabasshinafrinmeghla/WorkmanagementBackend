import express from "express";

import {
  adminDashboard,
  hrDashboard,
  employeeDashboard,
} from "../controllers/user.controller.js";

import { protect } from "../middleware/auth.middleware.js";
import { authorize } from "../middleware/role.middleware.js";

const router = express.Router();

router.get(
  "/admin",
  protect,
  authorize("admin"),
  adminDashboard
);

router.get(
  "/hr",
  protect,
  authorize("hr", "admin"),
  hrDashboard
);

router.get(
  "/employees",
  protect,
  authorize("employee", "hr", "admin"),
  employeeDashboard
);

export default router;