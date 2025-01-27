const router = require('express').Router();
const { Calificacion } = require('../../db');

router.get('/',async (req,res)=>{
    const calificacion = Calificacion.findAll();
    res.json(calificacion);
})

module.exports = router;