const pool = require("../db");

const getUsers = async (req, res, uid, pwd) => {
  const result = await pool.query("SELECT * FROM users WHERE userName ='$1'", [
    uid,
  ]);
  console.log(result);
  res.json(result);
};

const createUser = async (req, res) => {
  const user = req.body;

  console.log(user);
  res.send("create user");
};

module.exports = {
  getUsers,
  createUser,
};
