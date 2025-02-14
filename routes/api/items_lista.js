const router = require('express').Router();
const { Items_lista } = require('../../db');

router.get('/',async (req,res)=>{
    const items_list = await Items_lista.findAll({logging: false});
    res.json(items_list)
})

module.exports = router;