// 1- calling the model
const User = require("../models/user");

const errorHandler = (error, req, res) => {
  console.error("An error occurred:", error);
  res.status(500).json({ error: "Internal Server Error" });
};



const allUsers = (req, res) => {
  User.find({ role: 0 })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      errorHandler(error, req, res);
    });
};


module.exports = {
  allUsers,

};
