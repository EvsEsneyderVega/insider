const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { Vehiculo } = require('../../db'); 

router.get('/:placa',async (req,res)=>{
    const vehiculo = await Vehiculo.findAll({logging: false,
        where: {PLACA: req.params.placa}
    });
    res.json(vehiculo)
})

router.post('/',[
    // check('ID_VEH','obligatorio').not().isEmpty(),
    // check('CODIGO_VEHICULO','obligatorio').not().isEmpty(),
    check('PLACA','obligatorio').not().isEmpty(),
    check('LINEA','obligatorio').not().isEmpty(),
    check('MODELO','obligatorio').not().isEmpty(),
    check('CILINDRAJE','obligatorio').not().isEmpty(),
    check('COLOR','obligatorio').not().isEmpty(),
    check('SERVICIO','obligatorio').not().isEmpty(),
    check('CLASE','obligatorio').not().isEmpty(),
    check('CARROCERIA','obligatorio').not().isEmpty(),
    check('COMBUSTIBLE','obligatorio').not().isEmpty(),
    check('CAPACIDAD','obligatorio').not().isEmpty(),
    check('N_MOTOR','obligatorio').not().isEmpty(),
    check('VIN','obligatorio').not().isEmpty(),
    check('N_SERIE','obligatorio').not().isEmpty(),
    check('CHASIS','obligatorio').not().isEmpty(),
    check('PAIS','obligatorio').not().isEmpty(),
    check('TIPO_MOTOR','obligatorio').not().isEmpty(),
    check('POTENCIA','obligatorio').not().isEmpty(),
    check('FECHA_VEN_SOAT','obligatorio').not().isEmpty(),
    check('CONVERSION_GNV','obligatorio').not().isEmpty(),
    check('FECHA_VEN_GNV','obligatorio').not().isEmpty(),
    check('BLINDAJE','obligatorio').not().isEmpty(),
    check('LICENCIA_TRANSITO','obligatorio').not().isEmpty()
],async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
    const vehiculo = await Vehiculo.create(req.body);
    res.json(vehiculo);
})  

module.exports = router;