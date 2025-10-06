const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const pg = require('pg');
const App = express();
const port = 5000;

App.use(cors());
App.use(bodyParser.json());

const db = new pg.Pool({
  user: 'practica_user',
  host: 'db',
  database: 'practica_db',
  password: 'practica_pass',
  port: 5432,
});

App.post('/users', async (req, res) => {
  const { dni, nombre, apellido, fecha_nacimiento, genero, ciudad } = req.body;
  try {
    const result = await db.query(
      'INSERT INTO usuarios (dni, nombre, apellido, fecha_nacimiento, genero, ciudad) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [dni, nombre, apellido, fecha_nacimiento, genero, ciudad]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

App.get('/users', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM usuarios');
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});


App.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
