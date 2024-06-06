const { Router } = require("express");
const { createUser, loginUser } = require("../controllers/user.controllers");
const router = Router();

router.post("/login", loginUser);
router.get("/login", loginUser);

module.exports = router;
