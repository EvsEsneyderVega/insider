const router = require('express').Router();
const { Condiciones } = require('../../db');

router.get('/',async (req,res)=>{
    const condiciones = await Condiciones.findAll();
    res.json(condiciones)
})

module.exports = router;