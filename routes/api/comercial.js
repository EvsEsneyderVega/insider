const router = require('express').Router();
const { check,validationResult } = require('express-validator');
const { Comercial } = require('../../db');

router.get('/', async(req,res)=>{
    const comercial = await Comercial.findAll({logging: false});
    res.json(comercial);

})
 
router.post('/',[
    check('COD_COMERCIAL','obligatorio').not().isEmpty(),
    check('NOMBRE','obligatorio').not().isEmpty()
],async(req,res)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
    try {

        const comercialExistente = await Comercial.findOne({logging:false, where: { COD_COMERCIAL:req.body.COD_COMERCIAL} });
        if (comercialExistente) {
            return res.status(400).json({ error: 'El comercial ya existe' });
        }

        const comercial = await Comercial.create(req.body);
        res.status(201).json(comercial);
    } catch (error) {
        res.status(500).json({ 
            error: error.message || 'Error al crear el comercial' 
        });
    }
    
})

module.exports = router;