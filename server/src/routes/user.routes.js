const { Router } = require("express");
const {
  loginUser,
  getMenu,
  logActivity,
  getActions,
  saveData,
} = require("../controllers/user.controllers");
const router = Router();

router.post("/login", loginUser);
router.get("/menu", getMenu);
router.post("/bitacora", logActivity);
router.get("/actions", getActions);
router.post("/:moduleId", saveData);

module.exports = router;
