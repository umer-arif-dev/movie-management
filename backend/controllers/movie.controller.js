import Movie from "../models/movie.model.js";

const createMovie = async (req, res) => {
  try {
    const {
      picurl,
      title,
      duration,
      rating,
      genre,
      release_date,
      director,
      writers,
      description,
    } = req.body;

    const movie = await Movie.create({
      picurl,
      title,
      duration,
      rating,
      genre,
      release_date,
      director,
      writers,
      description,
    });

    res.status(201).json({
      message: "Movie created successfully",
      movie: {
        id: movie._id,
        picurl: movie.picurl,
        title: movie.title,
        duration: movie.duration,
        rating: movie.rating,
        genre: movie.genre,
        release_date: movie.release_date,
        director: movie.director,
        writers: movie.writers,
        description: movie.description,
      },
    });
  } catch (error) {
    console.error("Create movie error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();

    const formattedMovies = movies.map((movie) => ({
      id: movie._id,
      picurl: movie.picurl,
      title: movie.title,
      duration: movie.duration,
      rating: movie.rating,
      genre: movie.genre,
      release_date: movie.release_date,
      director: movie.director,
      writers: movie.writers,
      description: movie.description,
    }));

    res.status(200).json(formattedMovies);
  } catch (error) {
    console.error("Get movies error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

const getMovieById = async (req, res) => {
  try {
    const { id } = req.params;

    const movie = await Movie.findById(id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json({
      id: movie._id,
      picurl: movie.picurl,
      title: movie.title,
      duration: movie.duration,
      rating: movie.rating,
      genre: movie.genre,
      release_date: movie.release_date,
      director: movie.director,
      writers: movie.writers,
      description: movie.description,
    });
  } catch (error) {
    console.error("Get movie by ID error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export { getAllMovies, getMovieById, createMovie };
