import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes/route.js";

dotenv.config();
const app = express();
app.use(cors({ origin: "https://travelandtourismagency.netlify.app/" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);

mongoose.connect(process.env.MONGO_URL);
const connection = mongoose.connection;
connection
  .on("connected", () => {
    console.log("Database connected successfully");
    app.listen(5000, () => console.log(`Server is running on port:${5000}`));
  })
  .on("error", () => console.log("Database connection failed"));

export default app;
