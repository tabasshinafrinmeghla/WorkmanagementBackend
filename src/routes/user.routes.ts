import express from "express";

import {
  adminDashboard,
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
  "/employee",
  protect,
  authorize("employee", "admin"),
  employeeDashboard
);

export default router;