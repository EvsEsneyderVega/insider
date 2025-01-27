const router = require('express').Router();
const { Estado } = require('../../db')

router.get('/', async (req,res)=>{
    const estado = await Estado.findAll();
    res.json(estado);
})

module.exports = router;