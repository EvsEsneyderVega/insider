const router = require('express').Router();

const usuarioRoute = require('./api/usuario');

const carroceriaRoute = require('./api/carroceria');

const ciudadRoute = require('./api/ciudad');

const departamentoRoute = require('./api/departamento');

const colorRouter = require('./api/color');

const combustibleRouter = require('./api/combustible');

const marcaRouter = require('./api/marca');

const lineaRouter = require('./api/linea');

const estadoRouter = require('./api/estado');

const paisRouter = require('./api/pais');

const claseRouter = require('./api/clase');

const tp_motorRouter = require('./api/tp_motor');

const servicioRouter = require('./api/servicio');

const tp_documentoRouter = require('./api/tp_documento');

const vehiculoRouter = require('./api/vehiculo');

const propietarioRouter = require('./api/propietario');

const comercialRouter = require('./api/comercial');

const calificacionRouter = require('./api/calificacion');

const midleware = require('../utils/midleware');

router.use('/usuario', usuarioRoute);

/*agregar midleware a partir de aqui*/
router.use('/carroceria',midleware.checkToken,carroceriaRoute);
router.use('/ciudad',midleware.checkToken,ciudadRoute);
router.use('/departamento',midleware.checkToken,departamentoRoute);
router.use('/color',midleware.checkToken,colorRouter);
router.use('/combustible',midleware.checkToken,combustibleRouter);
router.use('/marca',midleware.checkToken,marcaRouter);
router.use('/linea',midleware.checkToken,lineaRouter);
router.use('/estado',midleware.checkToken,estadoRouter);
router.use('/pais',midleware.checkToken,paisRouter);
router.use('/clase',midleware.checkToken,claseRouter);
router.use('/tipomotor',midleware.checkToken,tp_motorRouter);
router.use('/servicio',midleware.checkToken,servicioRouter);
router.use('/tp_documento',midleware.checkToken,tp_documentoRouter);
router.use('/vehiculo',midleware.checkToken,vehiculoRouter);
router.use('/propietario',midleware.checkToken,propietarioRouter);
router.use('/comercial',midleware.checkToken,comercialRouter);
router.use('/calificacion',midleware.checkToken,calificacionRouter);
/*fin midelware*/

module.exports = router; 