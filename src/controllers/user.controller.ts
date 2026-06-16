import { Request, Response } from "express";

export const adminDashboard = (
  req: Request,
  res: Response
) => {
  res.json({
    success: true,
    message: "Welcome Admin",
  });
};

export const teamLeadDashboard = (
  req: Request,
  res: Response
) => {
  res.json({
    success: true,
    message: "Welcome Team Lead",
  });
};

export const employeeDashboard = (
  req: Request,
  res: Response
) => {
  res.json({
    success: true,
    message: "Welcome Employee",
  });
};