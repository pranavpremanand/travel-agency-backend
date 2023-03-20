import express from "express";
import { addAdmin, changeBanner, getAdminsData, getBanner, updateAdmin } from "../controller/controller.js";
const router = express.Router();

// Get current banner
router.get("/", getBanner);

// Change banner
router.patch("/admin/change-banner", changeBanner);

// Add admin
router.post('/admin/add-admin',addAdmin)

// Get admin roles
router.get('/admin/get-admins-data',getAdminsData)

// Update admin
router.patch('/admin/update-role',updateAdmin)

export default router;
