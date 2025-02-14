const router = require('express').Router();
const { Combustible } = require('../../db');

router.get('/',async (req,res)=>{
    const combustible = await Combustible.findAll({logging: false});
    res.json(combustible);

})

module.exports = router;