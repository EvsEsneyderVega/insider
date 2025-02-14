const router = require('express').Router();
const { Tp_motor } = require('../../db');

router.get('/',async (req,res)=>{
    const tp_motor = await Tp_motor.findAll({logging: false});
    res.json(tp_motor);
})

module.exports = router;