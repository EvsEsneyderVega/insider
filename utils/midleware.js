const jwt = require('jwt-simple');
const moment = require('moment');
require('dotenv').config();

const checkToken = (req,res,next) => {
    
    if(!req.headers['user-token']){
        return res.json({ error: 'No existe token'})
    }

    const userToken = req.headers['user-token'];
    let payload = {}
    
    try {
        payload = jwt.decode(userToken,process.env.JWT_SECRET);
    }catch(err){
        return res.json({error: 'token fail'
        });
    }

    if(payload.expiredAt < moment().unix()){
        return res.json({ error: 'Sesion ha expirado'});    
    }

    req.usuarioId = payload.usuarioId;

    next();

}

module.exports = {
    checkToken: checkToken
}