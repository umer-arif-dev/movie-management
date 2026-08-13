// import express from "express";
// import {
//   getAllMovies,
//   getMovieById,
//   createMovie,
//    updateMovie,
//   deleteMovie,
// } from "../controllers/movie.controller.js";
// import verifyToken from "../middleware/verifyToken.middleware.js";
// import {validateMovie,validateMovieUpdate} from "../middleware/movie.middleware.js";

// const router = express.Router();

// router.get("/getmovies", getAllMovies);

// router.get("/movieById/:id", getMovieById);
// router.post("/movies", validateMovie, createMovie);
// router.put("/movies/:id", validateMovieUpdate, updateMovie);
// router.delete("/movies/:id", deleteMovie);

// router.get("/protected", verifyToken, (req, res) => {
//   res.json({
//     message: "You are authenticated",
//     user: req.user,
//   });
// });
// export default router;

import express from "express";

import {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
} from "../controllers/movie.controller.js";

import verifyToken from "../middleware/verifyToken.middleware.js";
import adminMiddleware from "../middleware/admin.middleware.js";

import {
  validateMovie,
  validateMovieUpdate,
} from "../middleware/movie.middleware.js";

const router = express.Router();

// Public routes
router.get("/getmovies", getAllMovies);

router.get("/movieById/:id", getMovieById);

// Admin only
router.post(
  "/movies",
  verifyToken,
  adminMiddleware,
  validateMovie,
  createMovie
);

router.put(
  "/movies/:id",
  verifyToken,
  adminMiddleware,
  validateMovieUpdate,
  updateMovie
);

router.delete(
  "/movies/:id",
  verifyToken,
  adminMiddleware,
  deleteMovie
);

// Protected test route
router.get("/protected", verifyToken, (req, res) => {
  res.json({
    message: "You are authenticated",
    user: req.user,
  });
});

export default router;