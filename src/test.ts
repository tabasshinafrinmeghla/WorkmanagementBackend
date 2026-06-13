import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://Employee_Daily_Work_Management_System:abc123456@cluster0.uampvhe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });