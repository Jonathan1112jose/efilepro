const { Router } = require("express");
const {
  createUser,
  loginUser,
  getMenu,
  logActivity,
} = require("../controllers/user.controllers");
const router = Router();

router.post("/login", loginUser);
router.get("/menu", getMenu);
router.post("/bitacora", logActivity);
module.exports = router;
