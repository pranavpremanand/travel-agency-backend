import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/route.js";

dotenv.config();
const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors({ origin: "https://travelandtourismagency.netlify.app/" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Database connected successfully");
    app.listen(5000, () => console.log(`Server is running on port:${5000}`));
  })
  .catch(() => console.log("Database connection failed"));
app.use("/", route);
export default app;
