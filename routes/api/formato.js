const router = require('express').Router();
const { Formato } = require('../../db');

router.get('/',async (req,res)=>{
    const formato = await Formato.findAll({logging: false});
    res.json(formato);
})

module.exports = router