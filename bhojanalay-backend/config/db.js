import mongoose from "mongoose";
import dns from "dns";

// Ensure DNS SRV queries resolve reliably on Windows
try {
  dns.setServers(["8.8.8.8", "1.1.1.1"]);
} catch (e) {
  // fallback if custom DNS set fails
}

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