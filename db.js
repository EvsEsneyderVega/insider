require('dotenv').config();

const Sequelize = require('sequelize');

const usuario = require('./models/usuario');
const carroceria = require('./models/carroceria');
const combustible = require('./models/combustible');
const ciudad = require('./models/ciudad');
const departamento = require('./models/departamento');
const color = require('./models/color');
const marca = require('./models/marca');
const linea = require('./models/linea');
const estado = require('./models/estado')
const pais = require('./models/pais');
const clase = require('./models/clase');
const tp_motor = require('./models/tp_motor');
const servicio = require('./models/servicio');
const tp_documento = require('./models/tp_documento');
const vehiculo = require('./models/vehiculo');
const propietario = require('./models/propietario');
const comercial = require('./models/comercial');
const calificacion = require('./models/calificacion');
const calificacion_lista = require('./models/calificacion_lista');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASSWORD,{

    host:process.env.DB_HOST,

    dialect: 'mysql'

});

const Usuario = usuario(sequelize,Sequelize);
const Carroceria = carroceria(sequelize,Sequelize);
const Ciudad = ciudad(sequelize,Sequelize);
const Departamento = departamento(sequelize,Sequelize);
const Color = color(sequelize,Sequelize);
const Combustible = combustible(sequelize,Sequelize);
const Marca = marca(sequelize,Sequelize);
const Linea = linea(sequelize,Sequelize);
const Estado = estado(sequelize,Sequelize);
const Pais = pais(sequelize,Sequelize);
const Clase = clase(sequelize,Sequelize);
const Tp_motor = tp_motor(sequelize,Sequelize);
const Servicio = servicio(sequelize,Sequelize);
const Tp_documento = tp_documento(sequelize,Sequelize);
const Vehiculo = vehiculo(sequelize,Sequelize);
const Propietario = propietario(sequelize,Sequelize);
const Comercial = comercial(sequelize,Sequelize);
const Calificacion = calificacion(sequelize,Sequelize);
const Calificacion_lista = calificacion_lista(sequelize,Sequelize);

sequelize.sync({force: false})
.then(()=>{
    console.log('Tablas sincronizadas')
})

module.exports = {
    Usuario,
    Carroceria,
    Ciudad,
    Departamento,
    Color,
    Combustible,
    Marca,
    Linea,
    Estado,
    Pais,
    Clase,
    Tp_motor,
    Servicio,
    Tp_documento,
    Vehiculo,
    Propietario,
    Comercial,
    Calificacion,
    Calificacion_lista
}