const { check, validationResult } = require('express-validator');
const DOMPurify = require('isomorphic-dompurify');
const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { Usuario } = require('../../db');
const moment = require('moment');
const jwt = require('jwt-simple');
require('dotenv').config();

router.post('/register',[
    check('username','obligatorio').not().isEmpty(),
    check('password','obligatorio').not().isEmpty(),
    check('email','obligatorio').isEmail()
],async (req,res)=>{

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }
    req.body.password = bcrypt.hashSync(req.body.password,10);
    const user = await User.create(req.body);
    res.json(user);
})

router.post('/login',async (req,res) => {
    //console.log(req.headers)
    const NICK_USRSanitizado = DOMPurify.sanitize(req.body.NICK_USR)
    const passwordSanitizado = DOMPurify.sanitize(req.body.password);
    const user = await Usuario.findOne({logging: false,where: {LOGIN: NICK_USRSanitizado}});
    if(user){
        const iguales = passwordSanitizado===user.PASSWORD;

        if(iguales){
            res.status(200).json({succes: createToken(user),
                NIV_USR:user.ID_NIVUSR,
                ROL:user.ROL,
                CARGO:user.CARGO,
                ID_USUARIO:user.ID_USUARIO,
                autenticado:true
            })
        }else{
            res.status(200).json({error: 'datos erroneos'})
        }
    }else{
        res.status(500).json({error: 'datos erroneos'})
    }
});

const createToken = (user) =>{
    const payload = {
        usuarioId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(5,'minutes').unix()
    }
    return jwt.encode(payload,process.env.JWT_SECRET);
};

module.exports = router;