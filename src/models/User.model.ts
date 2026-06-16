import mongoose, { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "admin" | "hr" | "employee" | "teamLead";
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

   role: {
  type: String,
  enum: ["admin", "hr", "employee", "teamLead"],
  default: "employee",
},
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IUser>("User", userSchema);