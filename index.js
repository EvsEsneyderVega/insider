const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./routes/api');
require('./config/dbConfig'); // Configurar conexión a DB


const whitelist = ["http://localhost:5173", "http://mi-dominio.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
};

app.use(cors(corsOptions));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.use('/api/v1', routes);

app.get("/", (req, res) => {
  res.json({ message: "app funcional" });
})

// Servir archivos estáticos
app.use(express.static('public'));

// Escuchar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
