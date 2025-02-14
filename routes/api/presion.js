const router = require('express').Router();
const { Presion } = require('../../db');

router.get('/',async (req,res)=>{
    const presion = Presion.findAll({logging: false});
    res.json(presion);
})

module.exports = router;