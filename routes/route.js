import express from "express";
import { changeBanner, getBanner } from "../controller/controller.js";
const router = express.Router();

// Get current banner
router.get("/", getBanner);

// Change banner
router.post("/change-banner", changeBanner);

export default router;
