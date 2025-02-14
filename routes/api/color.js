const router = require('express').Router();
const { Color } = require('../../db');

router.get('/',async (req,res)=>{
    const color = await Color.findAll({logging: false});
    res.json(color);
})

module.exports = router;