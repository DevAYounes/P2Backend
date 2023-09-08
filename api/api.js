const express = require("express");
const router = express.Router();
const { register, login } = require("../controllers/userController");
const { getPolls, addPolls,submit ,getMyPolls,getActivePolls} = require("../controllers/pollsController");
const test = require("../controllers/test");
//User
router.post("/users/register", register);
router.post("/users/login", login);

//polls
router.post("/addPolls/:email",addPolls)
router.get("/getPolls/",getPolls)
router.get("/getMyPolls/:email",getMyPolls)
router.get("/getActivePolls/:email",getActivePolls)
router.post("/submit/:value/:title",submit)

//test
router.post("/:email",test.add)

module.exports = router;
