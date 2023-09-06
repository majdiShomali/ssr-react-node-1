const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.get("/api/users" , userController.allUsers);


module.exports = router;