const router = require('express').Router();
const { Combustible } = require('../../db');

router.get('/',async (req,res)=>{
    const combustible = await Combustible.findAll();
    res.json(combustible);

})

module.exports = router;