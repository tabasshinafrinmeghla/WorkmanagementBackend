import express from "express";

import {
  adminDashboard,
  teamLeadDashboard,
  employeeDashboard,
} from "../controllers/user.controller";

import { protect } from "../middleware/auth.middleware";
import { authorize } from "../middleware/role.middleware";

const router = express.Router();

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

router.get(
  "/team-lead",
  protect,
  authorize("teamLead", "admin"),
  teamLeadDashboard
);

// AFTER
router.get(
  "/employees",
  protect,
  authorize("employee", "teamLead", "admin"),
  employeeDashboard
);
export default router;