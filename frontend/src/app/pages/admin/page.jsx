"use client";

import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "react-hot-toast";

const BASE_URL = "http://localhost:4000/api";

const emptyForm = {
  picurl: "",
  title: "",
  duration: "",
  rating: "",
  genre: "",
  release_date: "",
  director: "",
  writers: "",
  description: "",
};

export default function AdminPage() {
  const router = useRouter();

  const [formData, setFormData] = useState(emptyForm);
  const [movies, setMovies] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdmin();
  }, []);

  const checkAdmin = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/pages/locdgin");
      return;
    }

    try {
      const decoded = jwtDecode(token);

      if (decoded.role !== "admin") {
  sessionStorage.setItem("adminError", "Admin access required");
  router.push("/pages/home");
  return;
}

      await getMovies();
    } catch (error) {
      console.error(error);
      localStorage.removeItem("token");
      router.push("/pages/login");
    } finally {
      setLoading(false);
    }
  };

  const getMovies = async () => {
    try {
      const response = await fetch(`${BASE_URL}/getmovies`);
      const data = await response.json();

      setMovies(data.movies || data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load movies");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const movieData = {
      ...formData,
      rating: Number(formData.rating),
    };

    try {
      const url = editingId
        ? `${BASE_URL}/movies/${editingId}`
        : `${BASE_URL}/movies`;

      const method = editingId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(movieData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      toast.success(
        editingId ? "Movie updated successfully" : "Movie added successfully",
      );

      setFormData(emptyForm);
      setEditingId(null);

      await getMovies();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
    

};

const handleEdit = (movie) => {
setEditingId(movie._id || movie.id);


setFormData({
  picurl: movie.picurl || "",
  title: movie.title || "",
  duration: movie.duration || "",
  rating: movie.rating ?? "",
  genre: movie.genre || "",
  release_date: movie.release_date
    ? movie.release_date.substring(0, 10)
    : "",
  director: movie.director || "",
  writers: movie.writers || "",
  description: movie.description || "",
});

window.scrollTo({
  top: 0,
  behavior: "smooth",
});


};

const handleDelete = async (id) => {
const confirmDelete = window.confirm(
"Are you sure you want to delete this movie?"
);

``;
    if (!confirmDelete) {
      return;
    }

    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`${BASE_URL}/movies/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      toast.success("Movie deleted successfully");

      await getMovies();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    }
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        Loading...{" "}
      </div>
    );
  }

  return (
    <>
      {" "}
      <Toaster position="top-center" />
      <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
            Admin Panel
          </h1>

          {/* Add / Update Movie Form */}

          <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl mb-10">
            <h2 className="text-2xl font-bold mb-6">
              {editingId ? "Update Movie" : "Add Movie"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                name="picurl"
                placeholder="Picture URL"
                value={formData.picurl}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="title"
                placeholder="Movie Title"
                value={formData.title}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="duration"
                placeholder="Duration"
                value={formData.duration}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="rating"
                type="number"
                step="0.1"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="genre"
                placeholder="Genre"
                value={formData.genre}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="release_date"
                type="date"
                value={formData.release_date}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="director"
                placeholder="Director"
                value={formData.director}
                onChange={handleChange}
                className="input"
                required
              />

              <input
                name="writers"
                placeholder="Writers"
                value={formData.writers}
                onChange={handleChange}
                className="input"
                required
              />

              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
                className="input md:col-span-2 h-32"
                required
              />

              <div className="md:col-span-2 flex gap-3">
                <button
                  type="submit"
                  className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold"
                >
                  {editingId ? "Update Movie" : "Add Movie"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-semibold"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Movies */}

          <h2 className="text-2xl font-bold mb-5">Manage Movies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {movies.map((movie) => {
              const movieId = movie._id || movie.id;

              return (
                <div
                  key={movieId}
                  className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
                >
                  <img
                    src={movie.picurl}
                    alt={movie.title}
                    className="w-full h-56 object-cover"
                  />

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">{movie.title}</h3>

                    <p className="text-gray-400 mb-1">Rating: {movie.rating}</p>

                    <p className="text-gray-400 mb-4">Genre: {movie.genre}</p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(movie)}
                        className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
                      >
                        Update
                      </button>

                      <button
                        onClick={() => handleDelete(movieId)}
                        className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
