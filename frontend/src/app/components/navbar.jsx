// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close icons

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between md:justify-between">

//           {/* Left Side (Desktop) / Center (Mobile) */}
//           <h1 className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8] text-center ">
//             Movie Management
//           </h1>

//           {/* Right Side Links (Hidden on small screens) */}
//           <div className="hidden md:flex space-x-6">
//             <Link href="/pages/home" className="hover:text-blue-400 transition duration-300">
//               Home
//             </Link>
//             <Link href="/pages/about" className="hover:text-blue-400 transition duration-300">
//               About
//             </Link>
//             <Link href="/pages/contact" className="hover:text-blue-400 transition duration-300">
//               Contact
//             </Link>
//           </div>

//           {/* Hamburger Menu Button (Visible only on small screens) */}
//           <button
//             className=" md:hidden text-2xl"
//             onClick={() => setIsOpen(true)}
//           >
//             <FiMenu />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar Menu */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out shadow-lg z-50`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={() => setIsOpen(false)}
//         >
//           <FiX />
//         </button>

//         {/* Menu Links */}
//         <div className="flex flex-col items-start mt-16 space-y-6 px-6">
//           <Link
//             href="/pages/home"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>
//           <Link
//             href="/pages/about"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>
//           <Link
//             href="/pages/contact"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between md:justify-between">

//           {/* Logo */}
//           <h1 className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8] text-center">
//             Movie Management
//           </h1>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6">
//             <Link
//               href="/pages/home"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/pages/about"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/pages/contact"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Contact
//             </Link>

//             <Link
//               href="/pages/profile"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Profile
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setIsOpen(true)}
//           >
//             <FiMenu />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out shadow-lg z-50`}
//       >

//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={() => setIsOpen(false)}
//         >
//           <FiX />
//         </button>

//         {/* Mobile Links */}
//         <div className="flex flex-col items-start mt-16 space-y-6 px-6">

//           <Link
//             href="/pages/home"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>

//           <Link
//             href="/pages/about"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>

//           <Link
//             href="/pages/contact"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>

//           <Link
//             href="/pages/profile"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Profile
//           </Link>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
// const [isAdmin, setIsAdmin] = useState(false);

//   // useEffect(() => {
//   //   const token = localStorage.getItem("token");

//   //   if (token) {
//   //     setIsLoggedIn(true);
//   //   }
//   // }, []);
//   useEffect(() => {
//   const token = localStorage.getItem("token");

//   if (token) {
//     setIsLoggedIn(true);

//     try {
//       const decoded = jwtDecode(token);

//       if (decoded.role === "admin") {
//         setIsAdmin(true);
//       }
//     } catch (error) {
//       console.error("Invalid token");
//     }
//   }
// }, []);

//   return (
//     <>
//       <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

//           {/* Logo */}
//           <h1 className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
//             Movie Management
//           </h1>

//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 items-center">
//             <Link
//               href="/pages/home"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Home
//             </Link>

//             <Link
//               href="/pages/about"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               About
//             </Link>

//             <Link
//               href="/pages/contact"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Contact
//             </Link>

//             {/* Profile only after login */}
//             {isLoggedIn && (
//               <Link
//                 href="/pages/profile"
//                 className="hover:text-blue-400 transition duration-300"
//               >
//                 Profile
//               </Link>
//             )}
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setIsOpen(true)}
//           >
//             <FiMenu />
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out shadow-lg z-50`}
//       >

//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={() => setIsOpen(false)}
//         >
//           <FiX />
//         </button>

//         {/* Mobile Links */}
//         <div className="flex flex-col items-start mt-16 space-y-6 px-6">

//           <Link
//             href="/pages/home"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>

//           <Link
//             href="/pages/about"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>

//           <Link
//             href="/pages/contact"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>

//           {/* Profile only after login */}
//           {isLoggedIn && (
//             <Link
//               href="/pages/profile"
//               className="hover:text-blue-400 transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Profile
//             </Link>
//           )}

//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { FiMenu, FiX } from "react-icons/fi";
// import { jwtDecode } from "jwt-decode";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [isAdmin, setIsAdmin] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");

//     if (!token) {
//       return;
//     }

//     setIsLoggedIn(true);

//     try {
//       const decoded = jwtDecode(token);

//       if (decoded.role === "admin") {
//         setIsAdmin(true);
//       }
//     } catch (error) {
//       console.error("Invalid token:", error);
//     }
//   }, []);

//   return (
//     <>
//       {/* Navbar */}{" "}
//       <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
//         {" "}
//         <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
//           ```
//           {/* Logo */}
//           <h1 className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
//             Movie Management
//           </h1>
//           {/* Desktop Links */}
//           <div className="hidden md:flex space-x-6 items-center">
//             {/* Home */}
//             <Link
//               href="/pages/home"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Home
//             </Link>

//             {/* About */}
//             <Link
//               href="/pages/about"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               About
//             </Link>

//             {/* Contact */}
//             <Link
//               href="/pages/contact"
//               className="hover:text-blue-400 transition duration-300"
//             >
//               Contact
//             </Link>

//             {/* Profile - Only Logged In Users */}
//             {isLoggedIn && (
//               <Link
//                 href="/pages/profile"
//                 className="hover:text-blue-400 transition duration-300"
//               >
//                 Profile
//               </Link>
//             )}

//             {/* Admin Panel - Only Admin */}
//             {isAdmin && (
//               <Link
//                 href="/pages/admin"
//                 className="hover:text-blue-400 transition duration-300"
//               >
//                 Admin Panel
//               </Link>
//             )}
//           </div>
//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-2xl"
//             onClick={() => setIsOpen(true)}
//           >
//             <FiMenu />
//           </button>
//         </div>
//       </nav>
//       {/* Mobile Sidebar */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
//           isOpen ? "translate-x-0" : "translate-x-full"
//         } transition-transform duration-300 ease-in-out shadow-lg z-50`}
//       >
//         {/* Close Button */}
//         <button
//           className="absolute top-4 right-4 text-2xl"
//           onClick={() => setIsOpen(false)}
//         >
//           <FiX />
//         </button>

//         {/* Mobile Links */}
//         <div className="flex flex-col items-start mt-16 space-y-6 px-6">
//           {/* Home */}
//           <Link
//             href="/pages/home"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Home
//           </Link>

//           {/* About */}
//           <Link
//             href="/pages/about"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             About
//           </Link>

//           {/* Contact */}
//           <Link
//             href="/pages/contact"
//             className="hover:text-blue-400 transition duration-300"
//             onClick={() => setIsOpen(false)}
//           >
//             Contact
//           </Link>

//           {/* Profile - Only Logged In Users */}
//           {isLoggedIn && (
//             <Link
//               href="/pages/profile"
//               className="hover:text-blue-400 transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Profile
//             </Link>
//           )}

//           {/* Admin Panel - Only Admin */}
//           {isAdmin && (
//             <Link
//               href="/pages/admin"
//               className="hover:text-blue-400 transition duration-300"
//               onClick={() => setIsOpen(false)}
//             >
//               Admin Panel
//             </Link>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// "use client";

// import { useEffect, useState } from "react";
// import { jwtDecode } from "jwt-decode";
// import { useRouter } from "next/navigation";
// import { toast, Toaster } from "react-hot-toast";

// const BASE_URL = "http://localhost:4000/api";

// const emptyForm = {
// picurl: "",
// title: "",
// duration: "",
// rating: "",
// genre: "",
// release_date: "",
// director: "",
// writers: "",
// description: "",
// };

// export default function AdminPage() {
// const router = useRouter();

// const [formData, setFormData] = useState(emptyForm);
// const [movies, setMovies] = useState([]);
// const [editingId, setEditingId] = useState(null);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
// checkAdmin();
// }, []);

// const checkAdmin = async () => {
// const adminToken = localStorage.getItem("token");

// if (!adminToken) {
//   router.push("/pages/login");
//   return;
// }

// try {
//   const decoded = jwtDecode(adminToken);

//   if (decoded.role !== "admin") {
//     toast.error("Admin access required");
//     router.push("/pages/home");
//     return;
//   }

//   await getMovies();
// } catch (error) {
//   console.error("Admin check error:", error);

//   localStorage.removeItem("token");
//   router.push("/pages/login");
// } finally {
//   setLoading(false);
// }

// };

// const getMovies = async () => {
// try {
// const response = await fetch(`${BASE_URL}/getmovies`);

//   const data = await response.json();

//   setMovies(data.movies || data);
// } catch (error) {
//   console.error("Get movies error:", error);
//   toast.error("Failed to load movies");
// }

// };

// const handleChange = (e) => {
// const { name, value } = e.target;

// setFormData({
//   ...formData,
//   [name]: value,
// });

// };

// const handleSubmit = async (e) => {
// e.preventDefault();

// const adminToken = localStorage.getItem("token");

// const movieData = {
//   ...formData,
//   rating: Number(formData.rating),
// };

// try {
//   const url = editingId
//     ? `${BASE_URL}/movies/${editingId}`
//     : `${BASE_URL}/movies`;

//   const method = editingId ? "PUT" : "POST";

//   const response = await fetch(url, {
//     method,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${adminToken}`,
//     },
//     body: JSON.stringify(movieData),
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong");
//   }

//   toast.success(
//     editingId
//       ? "Movie updated successfully"
//       : "Movie added successfully"
//   );

//   setFormData(emptyForm);
//   setEditingId(null);

//   await getMovies();
// } catch (error) {
//   console.error("Movie save error:", error);
//   toast.error(error.message);
// }

// };

// const handleEdit = (movie) => {
// const movieId = movie._id || movie.id;

// setEditingId(movieId);

// setFormData({
//   picurl: movie.picurl || "",
//   title: movie.title || "",
//   duration: movie.duration || "",
//   rating: movie.rating ?? "",
//   genre: movie.genre || "",
//   release_date: movie.release_date
//     ? movie.release_date.substring(0, 10)
//     : "",
//   director: movie.director || "",
//   writers: movie.writers || "",
//   description: movie.description || "",
// });

// window.scrollTo({
//   top: 0,
//   behavior: "smooth",
// });

// };

// const handleDelete = async (id) => {
// const confirmDelete = window.confirm(
// "Are you sure you want to delete this movie?"
// );

// if (!confirmDelete) {
//   return;
// }

// const adminToken = localStorage.getItem("token");

// try {
//   const response = await fetch(`${BASE_URL}/movies/${id}`, {
//     method: "DELETE",
//     headers: {
//       Authorization: `Bearer ${adminToken}`,
//     },
//   });

//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Delete failed");
//   }

//   toast.success("Movie deleted successfully");

//   await getMovies();
// } catch (error) {
//   console.error("Delete movie error:", error);
//   toast.error(error.message);
// }

// };

// const cancelEdit = () => {
// setEditingId(null);
// setFormData(emptyForm);
// };

// if (loading) {
// return ( <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
// Loading... </div>
// );
// }

// return (
// <> <Toaster position="top-center" />

//   <div className="min-h-screen bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white px-4 py-10">
//     <div className="max-w-6xl mx-auto">

//       <h1 className="text-4xl font-bold text-center text-cyan-400 mb-10">
//         Admin Panel
//       </h1>

//       {/* Add / Update Movie */}

//       <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl mb-10">

//         <h2 className="text-2xl font-bold mb-6">
//           {editingId ? "Update Movie" : "Add Movie"}
//         </h2>

//         <form
//           onSubmit={handleSubmit}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >

//           <input
//             name="picurl"
//             placeholder="Picture URL"
//             value={formData.picurl}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="title"
//             placeholder="Movie Title"
//             value={formData.title}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="duration"
//             placeholder="Duration"
//             value={formData.duration}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="rating"
//             type="number"
//             step="0.1"
//             placeholder="Rating"
//             value={formData.rating}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="genre"
//             placeholder="Genre"
//             value={formData.genre}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="release_date"
//             type="date"
//             value={formData.release_date}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="director"
//             placeholder="Director"
//             value={formData.director}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <input
//             name="writers"
//             placeholder="Writers"
//             value={formData.writers}
//             onChange={handleChange}
//             className="input"
//             required
//           />

//           <textarea
//             name="description"
//             placeholder="Description"
//             value={formData.description}
//             onChange={handleChange}
//             className="input md:col-span-2 h-32"
//             required
//           />

//           <div className="md:col-span-2 flex gap-3">

//             <button
//               type="submit"
//               className="bg-cyan-600 hover:bg-cyan-700 px-6 py-2 rounded-lg font-semibold"
//             >
//               {editingId ? "Update Movie" : "Add Movie"}
//             </button>

//             {editingId && (
//               <button
//                 type="button"
//                 onClick={cancelEdit}
//                 className="bg-gray-600 hover:bg-gray-700 px-6 py-2 rounded-lg font-semibold"
//               >
//                 Cancel
//               </button>
//             )}

//           </div>

//         </form>
//       </div>

//       {/* Movies */}

//       <h2 className="text-2xl font-bold mb-5">
//         Manage Movies
//       </h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {movies.map((movie) => {

//           const movieId = movie._id || movie.id;

//           return (
//             <div
//               key={movieId}
//               className="bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden shadow-xl"
//             >

//               <img
//                 src={movie.picurl}
//                 alt={movie.title}
//                 className="w-full h-56 object-cover"
//               />

//               <div className="p-5">

//                 <h3 className="text-xl font-bold mb-2">
//                   {movie.title}
//                 </h3>

//                 <p className="text-gray-400 mb-1">
//                   Rating: {movie.rating}
//                 </p>

//                 <p className="text-gray-400 mb-4">
//                   Genre: {movie.genre}
//                 </p>

//                 <div className="flex gap-3">

//                   <button
//                     onClick={() => handleEdit(movie)}
//                     className="flex-1 bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
//                   >
//                     Update
//                   </button>

//                   <button
//                     onClick={() => handleDelete(movieId)}
//                     className="flex-1 bg-red-600 hover:bg-red-700 py-2 rounded-lg font-semibold"
//                   >
//                     Delete
//                   </button>

//                 </div>
//               </div>
//             </div>
//           );
//         })}

//       </div>
//     </div>
//   </div>
// </>

// );
// }

"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { jwtDecode } from "jwt-decode";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      return;
    }

    setIsLoggedIn(true);

    try {
      const decoded = jwtDecode(token);

      if (decoded.role === "admin") {
        setIsAdmin(true);
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsOpen(false);

    window.location.href = "/pages/login";
  };

  return (
    <>
      {" "}
      <nav className="w-full bg-gradient-to-r from-gray-950 via-gray-900 to-gray-800 text-white mt-2">
        {" "}
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-xl font-bold text-[#00b4d8] drop-shadow-[0_0_10px_#00b4d8]">
            Movie Management
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              href="/pages/home"
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>

            <Link
              href="/pages/about"
              className="hover:text-blue-400 transition duration-300"
            >
              About
            </Link>

            <Link
              href="/pages/contact"
              className="hover:text-blue-400 transition duration-300"
            >
              Contact
            </Link>

            {/* Profile - Logged in users only */}
            {isLoggedIn && (
              <Link
                href="/pages/profile"
                className="hover:text-blue-400 transition duration-300"
              >
                Profile
              </Link>
            )}

            {/* Admin Panel - Admin only */}
            {isAdmin && (
              <Link
                href="/pages/admin"
                className="hover:text-blue-400 transition duration-300"
              >
                Admin Panel
              </Link>
            )}
          </div>
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="hover:text-red-400 transition duration-300"
            >
              Logout
            </button>
          )}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(true)}
          >
            <FiMenu />
          </button>
        </div>
      </nav>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out shadow-lg z-50`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <FiX />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-start mt-16 space-y-6 px-6">
          <Link
            href="/pages/home"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/pages/about"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <Link
            href="/pages/contact"
            className="hover:text-blue-400 transition duration-300"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          {/* Profile - Logged in users only */}
          {isLoggedIn && (
            <Link
              href="/pages/profile"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          )}

          {/* Admin Panel - Admin only */}
          {isAdmin && (
            <Link
              href="/pages/admin"
              className="hover:text-blue-400 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Admin Panel
            </Link>
          )}
          {isLoggedIn && (
  <button
    onClick={handleLogout}
    className="hover:text-red-400 transition duration-300"
  >
    Logout
  </button>
)}
        </div>
      </div>
    </>
  );
}

export default Navbar;
