const jwt = require('jsonwebtoken');
const env=require('dotenv').config();

const authJwtVerify=function authJwtVerify( req , res , next){

    const authHeader=req.headers["authorization"];
    
    const token = authHeader && authHeader.split(' ')[1];
    if(token==null) return res.send('Token Not found',401);

    jwt.verify(token , env.parsed.ACCESS_TOKEN_SECRET , (err, user) => {
        if(err) return res.send('Token Missmatch',403);
        req.user =user;
        next();
    })

}

module.exports = authJwtVerify;
