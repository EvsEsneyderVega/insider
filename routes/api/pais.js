const router = require('express').Router();
const { Pais } = require('../../db');

router.get('/',async (req,res)=>{
    const pais = await Pais.findAll();
    res.json(pais);
})

module.exports = router;