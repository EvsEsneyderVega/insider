 const router = require('express').Router();
 const { Tp_documento } = require('../../db');

 router.get('/',async (req,res)=>{
    const tp_documento = await Tp_documento.findAll({logging: false});
    res.json(tp_documento);
 })

 module.exports = router;