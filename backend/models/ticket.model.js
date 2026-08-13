// import mongoose from "mongoose";

// const ticketSchema = new mongoose.Schema(
//   {
//     movieTitle: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     location: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     timeSlot: {
//       type: String,
//       required: true,
//     },

//     ticketPrice: {
//       type: Number,
//       required: true,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Ticket = mongoose.model("Ticket", ticketSchema);

// export default Ticket;
import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    movieTitle: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    timeSlot: {
      type: String,
      required: true,
    },

    ticketPrice: {
      type: Number,
      required: true,
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

export default Ticket;