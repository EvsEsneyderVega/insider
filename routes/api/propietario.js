const router = require('express').Router();
const { check, validationResult } = require('express-validator');
const { Propietario } = require('../../db');

router.get('/',async (req,res)=>{
    const propietario = await Propietario.findAll({logging: false});
    res.json(propietario);
})
/*
ID_PRO int(11) PK 
COD_PROPIETARIO int(11) 
TP_DOCUMENTO int(11) 
N_DOCUMENTO_PRO varchar(45) 
NOMBRE_PRO varchar(45) 
DIRECCION varchar(100) 
TELEFONO varchar(45) 
CIUDAD int(11) 
EMAIL
*/
router.post('/',[
      check('TP_DOCUMENTO','obligatorio').not().isEmpty(),
      check('N_DOCUMENTO_PRO','obligatorio').not().isEmpty(),
      check('NOMBRE_PRO','obligatorio').not().isEmpty(),
      check('DIRECCION','obligatorio').not().isEmpty(),
      check('TELEFONO','obligatorio').not().isEmpty(),
      check('CIUDAD','obligatorio').not().isEmpty(),
      check('EMAIL','obligatorio').not().isEmpty().isEmail().normalizeEmail()
    ],async (req,res)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(422).json({errores: errors.array()})
        }
        try {
            const propietario = await Propietario.create(req.body);
            res.json(propietario); 
        } catch (error) {
            res.status(500).json({errors: error.errors[0].message})
        }
        

})

module.exports = router;