const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { getPolls, addPolls,submit } = require("../controllers/pollsController");
const test = require("../controllers/test");
//User
router.post("/users/register", register);
router.post("/users/login", login);

//polls
router.post("/addPolls/:email",addPolls)
router.post("/getPolls/:email",getPolls)
router.post("/submit/:email",submit)

//test
router.post("/:email",test.add)

module.exports = router;
