const router = require('express').Router();
const { Calificacion_lista } = require('../../db');

router.get('/',async (req,res)=>{
    const calificacion_lista = await Calificacion_lista.findAll({logging: false});
    res.json(calificacion_lista);

})

module.exports = router;