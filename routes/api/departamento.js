const router = require('express').Router();
const { Departamento } = require('../../db');

router.get('/',async (req,res)=>{
    const departamento = await Departamento.findAll();
    res.json(departamento);
})

router.get('/:idDep',async (req,res)=>{
    const departamento = await Departamento.findAll({
        where: {ID_DEP: req.params.idDep}
    });
    res.json(departamento);
})

module.exports = router