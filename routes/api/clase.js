const router = require('express').Router();
const { Clase } = require('../../db');

router.get('/',async (req,res)=>{
    const clase = await Clase.findAll({logging: false}); 
    res.json(clase);
})

module.exports = router;