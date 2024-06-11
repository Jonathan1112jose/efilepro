const pool = require("../db");

const getUsers = async (req, res, next) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    console.log(result);
    res.json(result.rows);
  } catch (error) {
    next(error);
  }
};
const loginUser = async (req, res, next) => {
  try {
    const { userName, password } = req.body;
    const result = await pool.query(
      "SELECT * FROM users WHERE username = $1 AND password = $2",
      [userName, password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Credenciales incorrectas",
      });
    }
    const user = result.rows[0];
    res.json({
      id: user.id,
      username: user.username,
      rol: user.rol,
    });
  } catch (error) {
    next(error);
  }
};
const getMenu = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM menu");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logActivity = async (req, res, next) => {
  try {
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getUsers,
  loginUser,
  getMenu,
  logActivity,
};
