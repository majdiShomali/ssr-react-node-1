const User = require("../models/user");

const errorHandler = (error, req, res) => {
  console.error("An error occurred:", error);
  res.status(500).json({ error: "Internal Server Error" });
};

const allUsers = async (req, res, next) => {
  try {
    const data = await User.find({ role: 0 });
    res.status(200).json(data);
  } catch (error) {
    errorHandler(error, req, res);
  }
};

module.exports = {
  allUsers,
};





