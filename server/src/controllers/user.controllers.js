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

const saveData = async (req, res) => {
  const { moduleId } = req.params;
  const { data } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO ${moduleId} (codigointerno,nombre_proyecto, observaciones, fechacreacion, fechaactualizacion, fechaeliminacion, fav) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [
        data.codigoInterno,
        data.nombre,
        data.observaciones,
        data.fechaCreacion,
        data.fechaActualizacion,
        data.fechaEliminacion,
        data.fav,
      ]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(400).json({ error: "Error saving data" });
  }
};

const deleteRecord = async (req, res) => {
  const { moduleId, id } = req.params;

  try {
    const result = await pool.query(
      `UPDATE ${moduleId} SET fechaeliminacion = $1 WHERE id = $2 RETURNING *`,
      [new Date().toISOString(), id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error deleting record:", error);
    res.status(400).json({ error: "Error deleting record" });
  }
};

const getData = async (req, res) => {
  const { moduleId } = req.params;
  try {
    const result = await pool.query(`SELECT * FROM ${moduleId}`);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: "Sin Tabla" });
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

const getActions = async (req, res) => {
  try {
    const query = "SELECT * FROM actions";
    const result = await pool.query(query);
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching actions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getActions,
  getUsers,
  loginUser,
  getMenu,
  logActivity,
  saveData,
  getData,
  deleteRecord,
};
