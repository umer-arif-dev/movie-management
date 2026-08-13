import User from "../models/user.model.js";
import Ticket from "../models/ticket.model.js";

const getProfile = async (req, res) => {
  try {
    const userId = req.user.userId;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const tickets = await Ticket.find({ userId });

    const totalMovies = tickets.length;

    const totalBill = tickets.reduce(
      (total, ticket) => total + ticket.ticketPrice,
      0
    );

    res.status(200).json({
      user: {
        id: user._id,
        userName: user.userName,
        email: user.email,
      },
      totalMovies,
      totalBill,
      bookings: tickets,
    });
  } catch (error) {
    console.error("Get profile error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export { getProfile };