const router = require('express').Router();
const { Marca } = require('../../db');

router.get('/',async (req,res)=>{
    const marca = await Marca.findAll();
    res.json(marca);
})

module.exports = router;