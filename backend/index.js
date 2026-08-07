import "dotenv/config";

import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";

import authRoutes from "./routes/auth.routes.js";
import movieRoutes from "./routes/movie.routes.js";
import ticketRoutes from "./routes/ticket.routes.js";
import contactRoutes from "./routes/contact.routes.js";

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);
app.use("/api", movieRoutes);
app.use("/api", ticketRoutes);
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Movie Backend is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});