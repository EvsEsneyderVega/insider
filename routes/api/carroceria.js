const router = require('express').Router();
const { Carroceria } = require('../../db');

router.get('/',async (req,res)=>{
    const carroceria = await Carroceria.findAll({logging: false});
    res.json(carroceria);
})

module.exports = router;