import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes
from "./routes/authRoutes.js";
import connectDB from "./config/db.js";



dotenv.config();
console.log("MONGO_URI =", process.env.MONGO_URI);

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {

  res.send(
    "Bhojanalay Backend Running"
  );

});

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});