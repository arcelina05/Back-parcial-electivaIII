const db = require('../db/DB');


exports.agregarRol = (req, res) => {
  const { nombre, descripcion } = req.body;
  db.run('INSERT INTO roles (nombre, descripcion) VALUES (?, ?)', [nombre, descripcion || ''], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID });
  });
};

exports.obtenerRoles = (req, res) => {
  db.all('SELECT * FROM roles', [], (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
};
