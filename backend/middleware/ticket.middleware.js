


const validateTicket = (req, res, next) => {
  const { movieTitle, location, timeSlot, ticketPrice } = req.body;

  // Required fields
  if (
    !movieTitle ||
    !location ||
    !timeSlot ||
    ticketPrice === undefined
  ) {
    return res.status(400).json({
      message: "Movie title, location, time slot and ticket price are required",
    });
  }

  // Data type validation
  if (
    typeof movieTitle !== "string" ||
    typeof location !== "string" ||
    typeof timeSlot !== "string" ||
    typeof ticketPrice !== "number"
  ) {
    return res.status(400).json({
      message: "Invalid data type for one or more fields",
    });
  }

  // Ticket price validation
  if (ticketPrice <= 0) {
    return res.status(400).json({
      message: "Ticket price must be greater than 0",
    });
  }

  next();
};

export default validateTicket;
