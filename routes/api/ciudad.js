const router = require('express').Router();
const { Ciudad } = require('../../db');

router.get('/',async (req,res)=>{
    const ciudad = await Ciudad.findAll();
    res.json(ciudad);
})

router.get('/:idDep',async (req,res)=>{
    const ciudad = await Ciudad.findAll({logging: false,
        where: {DEPARTAMENTO_CIUDAD: req.params.idDep}
    });
    res.json(ciudad);
})

router.get('/city/:idCiu',async (req,res)=>{
    const ciudad = await Ciudad.findAll({logging: false,
        where: { ID_CIU: req.params.idCiu}
    });
    res.json(ciudad);
})

module.exports = router;