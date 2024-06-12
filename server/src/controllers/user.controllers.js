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

const logActivity = async (req, res) => {
  const { userName, date, action, path, description } = req.body;

  if (!userName || !date || !action || !path) {
    return res.status(400).send({ error: "Missing required fields" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO bitacora (username, date, action, path, description) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [userName, date, action, path, description]
    );

    res.status(201).send(result.rows[0]);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  getUsers,
  loginUser,
  getMenu,
  logActivity,
};
