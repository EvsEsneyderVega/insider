const router = require('express').Router();
const { Pais } = require('../../db');

router.get('/',async (req,res)=>{
    const pais = await Pais.findAll({logging: false});
    res.json(pais);
})

module.exports = router;