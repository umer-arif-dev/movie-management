import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    picurl: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    duration: {
      type: String,
      required: true,
    },

    rating: {
      type: Number,
      required: true,
    },

    genre: {
      type: String,
      required: true,
      trim: true,
    },

    release_date: {
      type: Date,
      required: true,
    },

    director: {
      type: String,
      required: true,
      trim: true,
    },

    writers: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;