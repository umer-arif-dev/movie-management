


const validateMovie = (req, res, next) => {
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

  // Required fields
  if (
    !picurl ||
    !title ||
    !duration ||
    rating === undefined ||
    !genre ||
    !release_date ||
    !director ||
    !writers ||
    !description
  ) {
    return res.status(400).json({
      message: "All movie fields are required",
    });
  }

  // Data type validation
  if (
    typeof picurl !== "string" ||
    typeof title !== "string" ||
    typeof duration !== "string" ||
    typeof rating !== "number" ||
    typeof genre !== "string" ||
    typeof release_date !== "string" ||
    typeof director !== "string" ||
    typeof writers !== "string" ||
    typeof description !== "string"
  ) {
    return res.status(400).json({
      message: "Invalid data type for one or more fields",
    });
  }

  next();
};


export default validateMovie;