const router = require('express').Router();
const { Carroceria } = require('../../db');

router.get('/',async (req,res)=>{
    const carroceria = await Carroceria.findAll();
    res.json(carroceria);
})

module.exports = router;