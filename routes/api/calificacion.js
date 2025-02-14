const router = require('express').Router();
const { Calificacion } = require('../../db');

router.get('/',async (req,res)=>{
    const calificacion = await Calificacion.findAll({logging: false});
    res.json(calificacion);
})

module.exports = router;