const validateSignup = (req, res, next) => {
  const { userName, email, password, confirmPassword } = req.body;

  // Required fields
  if (!userName || !email || !password || !confirmPassword) {
    console.log("Missing required fields:", {
      userName,
      email,
      password,
      confirmPassword,
    });
    return res.status(400).json({
      message: "Username, email, password and confirm password are required",
    });
  }

  // Data type validation
  if (
    typeof userName !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return res.status(400).json({
      message: "Username, email and passwords must be strings",
    });
  }

  // Password validation
  if (password !== confirmPassword) {
    return res.status(400).json({
      message: "Passwords do not match",
    });
  }

  next();
};

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  if (!password) {
    return res.status(400).json({
      message: "Password is required",
    });
  }

  next();
};

export { validateSignup, validateLogin };
