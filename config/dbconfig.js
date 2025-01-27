const { Sequelize } = require('sequelize');
require('dotenv').config();

// Configuración desde las variables de entorno
const {
  DB_NAME,
  DB_USER, 
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
} = process.env;

// Crear instancia de Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST || 'localhost',
  port: DB_PORT || 3306,
  dialect: DB_DIALECT || 'mysql', // mysql, postgres, sqlite, etc.
  logging: false // Desactivar logs de las consultas SQL en consola
});

// Probar conexión
sequelize
  .authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa.'))
  .catch((error) => console.error('Error al conectar a la base de datos:', error));

module.exports = sequelize;
