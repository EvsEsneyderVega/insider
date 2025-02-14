const router = require('express').Router();
const { Ingreso } = require('../../db');

router.get('/',async(req,res)=>{
    const ingreso = Ingreso.findAll({logging: false});
    res.json(ingreso);
})

module.exports = router;