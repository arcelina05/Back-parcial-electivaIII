const db = require('../db/DB');


exports.agregarUsuario = (req, res) => {
  const { nombres, apellidos, identificacion, correo, rolId } = req.body;
  db.run(`INSERT INTO usuarios (nombres, apellidos, identificacion, correo, rol_id) VALUES (?, ?, ?, ?, ?)`,
    [nombres, apellidos, identificacion, correo, rolId],
    function(err) {
      if (err) return res.status(400).json({ error: err.message });
      res.json({ id: this.lastID });
    });
};

exports.obtenerUsuarios = (req, res) => {
  db.all(`SELECT u.nombres || ' ' || u.apellidos AS nombreCompleto, r.nombre AS rol 
          FROM usuarios u 
          JOIN roles r ON u.rol_id = r.id`, [], (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
};