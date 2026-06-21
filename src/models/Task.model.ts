import mongoose, { Document } from "mongoose";

export interface ITask extends Document {
  title: string;
  teamMembers: string[];
  date: string;
  status: "On process" | "Complete" | "Pending";
}

const taskSchema = new mongoose.Schema<ITask>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    teamMembers: {
      type: [String],
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["On process", "Complete", "Pending"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<ITask>("Task", taskSchema);