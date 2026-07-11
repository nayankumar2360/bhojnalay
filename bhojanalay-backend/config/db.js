import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Inside db.js URI:", process.env.MONGO_URI);
    console.log("Attempting to connect to MongoDB Atlas...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected Successfully");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;