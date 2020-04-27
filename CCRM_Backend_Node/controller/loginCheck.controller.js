const loginCheck = require('../models/loginCheck.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env=require('dotenv').config();


exports.login_check = function (req, res) {
   
    loginCheck.find({username:req.body.username}).exec(function(err, result) {
        if(!err){
            if(bcrypt.compareSync(req.body.password, result[0].password))
            {
                let user={username:req.body.username}
                const accessToken=jwt.sign(user,env.parsed.ACCESS_TOKEN_SECRET,{ expiresIn: '15m' })
                var accessGenrated={accessToken:accessToken,isauth:true}
                result.push(accessGenrated);
                const finalRes=JSON.parse((JSON.stringify(result[0]) + JSON.stringify(result[1])).replace(/}{/g,","));
                res.send(finalRes);
             }
            else
              res.send("Username Or Password Invalid");   
        }
        else{
            res.send("Username Or Password Invalid");
        }
});
     
       
    };
