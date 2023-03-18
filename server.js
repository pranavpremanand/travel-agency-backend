import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import route from "./routes/route.js";
import dbConnection from './config/dbConnection.js'

const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// mongoose
//   .connect(process.env.MONGO_URL)
//   .then(() => {
//     console.log("Database connected successfully");
// })
// .catch(() => console.log("Database connection failed"));
app.use("/", route);
app.listen(5000, () => console.log(`Server is running on port:${5000}`));
export default app;
