"use client";

import { useEffect, useState } from "react";
import { getProfile } from "../../API's/api";

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Please login first");
      setLoading(false);
      return;
    }

    const fetchProfile = async () => {
      try {
        const data = await getProfile(token);
        setProfile(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center text-white">
        <p className="text-lg">Loading profile...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <p className="text-red-400 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 px-4 py-12 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Profile Header */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl mb-8">
          <h1 className="text-3xl font-bold mb-2">
            My Profile
          </h1>

          <p className="text-2xl font-semibold text-blue-400">
            {profile.user.userName}
          </p>

          <p className="text-gray-400 mt-1">
            {profile.user.email}
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Movies */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400 text-sm mb-2">
              Movies Booked
            </p>

            <p className="text-4xl font-bold text-blue-400">
              {profile.totalMovies}
            </p>
          </div>

          {/* Total Bill */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-400 text-sm mb-2">
              Total Bill
            </p>

            <p className="text-4xl font-bold text-green-400">
              Rs. {profile.totalBill}
            </p>
          </div>

        </div>

        {/* Bookings */}
        <div>
          <h2 className="text-2xl font-bold mb-5">
            My Bookings
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {profile.bookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-lg hover:border-blue-500 transition duration-300"
              >
                <h3 className="text-xl font-bold text-blue-400 mb-4">
                  {booking.movieTitle}
                </h3>

                <div className="space-y-2 text-gray-300">
                  <p>
                    <span className="text-gray-500">
                      Location:
                    </span>{" "}
                    {booking.location}
                  </p>

                  <p>
                    <span className="text-gray-500">
                      Time:
                    </span>{" "}
                    {booking.timeSlot}
                  </p>

                  <p>
                    <span className="text-gray-500">
                      Ticket Price:
                    </span>{" "}
                    <span className="text-green-400 font-semibold">
                      Rs. {booking.ticketPrice}
                    </span>
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </main>
  );
}