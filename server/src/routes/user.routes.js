const { Router } = require("express");
const { getUsers, createUser } = require("../controllers/user.controllers");
const router = Router();

router.get("/user/:uid/:pwd", getUsers);
router.post("/create", createUser);

module.exports = router;
