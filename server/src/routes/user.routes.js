const { Router } = require("express");
const {
  loginUser,
  getMenu,
  logActivity,
  getActions,
  saveData,
  getData,
  deleteRecord,
} = require("../controllers/user.controllers");
const router = Router();

router.post("/login", loginUser);
router.get("/menu", getMenu);
router.post("/bitacora", logActivity);
router.get("/actions", getActions);
router.post("/:moduleId", saveData);
router.get("/:moduleId", getData);
router.put("/:moduleId/:id", deleteRecord);

module.exports = router;
