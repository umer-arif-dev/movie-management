import express from "express";
import { bookTicket } from "../controllers/ticket.controller.js";
import validateTicket from "../middleware/ticket.middleware.js";
import verifyToken from "../middleware/verifyToken.middleware.js";

const router = express.Router();

router.post("/bookticket",  verifyToken, validateTicket, bookTicket);

export default router;
