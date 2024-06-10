const { Router } = require("express");
const {
  createUser,
  loginUser,
  getMenu,
} = require("../controllers/user.controllers");
const router = Router();

router.post("/login", loginUser);
router.get("/menu", getMenu);
module.exports = router;
