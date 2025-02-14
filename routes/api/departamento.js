const router = require('express').Router();
const { Departamento } = require('../../db');

router.get('/',async (req,res)=>{
    const departamento = await Departamento.findAll({loggin:false});
    res.json(departamento);
})

router.get('/:idDep',async (req,res)=>{
    const departamento = await Departamento.findAll({
        logging:false, where: {ID_DEP: req.params.idDep}
    });
    res.json(departamento);
})

module.exports = router