import express from "express";
import { getProfile } from "../controllers/profile.controller.js";
import verifyToken from "../middleware/verifyToken.middleware.js";

const router = express.Router();

router.get("/profile", verifyToken, getProfile);

export default router;