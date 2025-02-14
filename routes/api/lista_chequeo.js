const router = require('express').Router();
const { Lista_chequeo } = require('../../db');

router.get('/',async (req,res)=>{
    const lista_chequeo = Lista_chequeo.findAll({logging: false});
    res.json(lista_chequeo);
})

module.exports = router;