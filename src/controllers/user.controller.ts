import { Request, Response } from "express";

export const adminDashboard = (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Welcome Admin",
  });
};

export const employeeDashboard = (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Welcome Employee",
  });
};