const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config();

const serverConfig = {
  PORT: process.env.PORT || 4000, // Puerto del servidor
  JWT_SECRET: process.env.JWT_SECRET || 'clave_super_secreta', // Clave para JWT
  CORS_ORIGIN: process.env.CORS_ORIGIN || '*', // Origen permitido para CORS
};

module.exports = serverConfig;
