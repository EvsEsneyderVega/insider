const router = require('express').Router();

const { Linea } = require('../../db');

router.get('/',async (req,res)=>{
    const linea = await Linea.findAll();
    res.json(linea)

})
router.get('/:idMarca',async (req,res)=>{
    const linea = await Linea.findAll({
        where: {COD_LINEA_MARCA: req.params.idMarca}
    });
    res.json(linea)

})

module.exports = router;