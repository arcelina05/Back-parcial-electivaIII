// backend/db/initDatabase.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.resolve(__dirname, '../user_roles_app.db');
const db = new sqlite3.Database(dbPath);

// Crear tablas si no existen
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS roles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL UNIQUE,
    descripcion TEXT
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS usuarios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombres TEXT NOT NULL,
    apellidos TEXT NOT NULL,
    identificacion TEXT NOT NULL UNIQUE,
    correo TEXT NOT NULL UNIQUE,
    rol_id INTEGER,
    FOREIGN KEY (rol_id) REFERENCES roles(id)
  )`);
});

module.exports = db;
