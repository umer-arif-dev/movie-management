import express from "express";
import { createContactMessage } from "../controllers/contact.controller.js";
import validateContact from "../middleware/contact.middleware.js";
import verifyToken from "../middleware/verifyToken.middleware.js";

const router = express.Router();

router.post("/contact",  verifyToken, validateContact, createContactMessage);

export default router;
