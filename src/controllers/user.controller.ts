import { Request, Response } from "express";
import User from "../models/User.model.js";

export const getUsers = async (
  req: Request,
  res: Response
) => {
  try {
    const users = await User.find().select("-password");

    res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};

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