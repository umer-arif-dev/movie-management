// import Ticket from "../models/ticket.model.js";

// const bookTicket = async (req, res) => {
//   try {
//     const {
//       movieTitle,
//       location,
//       timeSlot,
//       ticketPrice,
//     } = req.body;

//     const ticket = await Ticket.create({
//       movieTitle,
//       location,
//       timeSlot,
//       ticketPrice,
//     });

//     res.status(201).json({
//       message: "Ticket booked successfully",
//       ticket: {
//         id: ticket._id,
//         movieTitle: ticket.movieTitle,
//         location: ticket.location,
//         timeSlot: ticket.timeSlot,
//         ticketPrice: ticket.ticketPrice,
//       },
//     });
//   } catch (error) {
//     console.error("Book ticket error:", error);

//     res.status(500).json({
//       message: "Server error",
//     });
//   }
// };

// export { bookTicket };

import Ticket from "../models/ticket.model.js";

const bookTicket = async (req, res) => {
  try {
    const { movieTitle, location, timeSlot, ticketPrice } = req.body;

    console.log("Request body:", req.body);
 const ticket = await Ticket.create({
  movieTitle,
  location,
  timeSlot,
  ticketPrice,
  userId: req.user.userId,
});

    res.status(201).json({
      message: "Ticket booked successfully",
      ticket: {
        id: ticket._id,
        movieTitle: ticket.movieTitle,
        location: ticket.location,
        timeSlot: ticket.timeSlot,
        ticketPrice: ticket.ticketPrice,
        userId: ticket.userId,
      },
    });
  } catch (error) {
    console.error("Book ticket error:", error);

    res.status(500).json({
      message: "Server error",
    });
  }
};

export { bookTicket };
