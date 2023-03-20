import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import route from "./routes/route.js";
import dbConnection from './config/dbConnection.js'

const app = express();
// app.use(cors({ origin: "http://localhost:3000" }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", route);
app.listen(5000, () => console.log(`Server is running on port:${5000}`));
export default app;
