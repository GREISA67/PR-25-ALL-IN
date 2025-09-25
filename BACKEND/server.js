const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api/usuario", require("./routes/usuario"));

app.listen(3001, () => {
  console.log("Servidor backend en http://localhost:3001");
});
