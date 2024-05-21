const pool = require("../db");

const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users");
  console.log(result);
  res.json(result.rows[0]);
};

const createUser = async (req, res) => {
  const user = req.body;

  console.log(user);
  res.json(user);
};

const updateUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  res.send("update user");
};

const deleteUser = async (req, res) => {
  const user = req.body;
  console.log(user);
  res.send("delete user");
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};
