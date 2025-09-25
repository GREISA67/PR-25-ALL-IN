// backend/db.js
const mysql = require("mysql2");

// Crear la conexión
const db = mysql.createConnection({
  host: "localhost",    // o el host de tu servidor
  user: "root",         // tu usuario de MySQL
  password: "",         // tu contraseña
  database: "all_in"   // nombre de la base de datos
});

// Conectar
db.connect((err) => {
  if (err) {
    console.error("Error de conexión a MySQL:", err);
    return;
  }
  console.log("✅ Conectado a MySQL");
});

module.exports = db;
