import dotenv from "dotenv";
dotenv.config();

import app from "./app";
import connectDB from "./config/db";

console.log("connectDB =", connectDB);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server Running On Port ${PORT}`);
  });
};

startServer();