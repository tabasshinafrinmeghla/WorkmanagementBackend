import { Request, Response } from "express";
import Task from "../models/Task.model.js";

// GET all tasks (with optional search)
export const getTasks = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    let query = {};
    if (search) {
      query = {
        $or: [
          { title: { $regex: search, $options: "i" } },
          { teamMembers: { $elemMatch: { $regex: search, $options: "i" } } },
          { status: { $regex: search, $options: "i" } },
        ],
      };
    }

    const tasks = await Task.find(query).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// GET single task
export const getTaskById = async (req: Request, res: Response) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// POST create task
export const createTask = async (req: Request, res: Response) => {
  try {
    const { title, teamMembers, date, status } = req.body;

    if (!title || !teamMembers || !date) {
      return res.status(400).json({ success: false, message: "Title, teamMembers, and date are required" });
    }

    const task = await Task.create({ title, teamMembers, date, status });
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// PUT update task
export const updateTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};

// DELETE task
export const deleteTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }
    res.status(200).json({ success: true, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error });
  }
};