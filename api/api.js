const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { getPolls, addPolls } = require("../controllers/pollsController");

//User
router.post("/users/register", register);
router.post("/users/login", login);

//polls
router.post("/addPolls",addPolls)
router.post("/getPolls",getPolls)


module.exports = router;
