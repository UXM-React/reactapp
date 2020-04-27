const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
mongoose.set('useUnifiedTopology', true);

var CCRM_UXM_Login = new mongoose.Schema({

    username:{
        type : String
    },
    password:{
        type : String
    },
    lastloginDate:{
        type : Date
    },
    empRole:{
        type : String
    }
});

var CCRM_UXM_Login=mongoose.model('CCRM_UXM_Login',CCRM_UXM_Login);
    /*const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const password="admin@123";
    const encriptPass=bcrypt.hashSync(password, salt);;
    var Empschema=new CCRM_UXM_Login({username:"admin",password:encriptPass,lastloginDate:new Date(),empRole:'Admin'});
    Empschema.save();

    const password2="vivek@123";
    const encriptPass2=bcrypt.hashSync(password2, salt);;
    
    var Empschema=new CCRM_UXM_Login({username:"vivek",password:encriptPass2,lastloginDate:new Date(),empRole:'Manager'});
    Empschema.save();*/
    

module.exports = CCRM_UXM_Login;
