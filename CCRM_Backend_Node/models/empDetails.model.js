const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

var CCRM_UXM_Associates = new mongoose.Schema({

    empId:{
        type : Number
    },
    empFirstName:{
        type : String
    },
    empLastName:{
        type : String
    },
    empTechmEmail:{
        type : String
    },
    empBand:{
        type : String
    },
    empRole:{
        type : String
    },
    empContactNumber:{
        type : String
    },
    empSkillSets:{
        type : String 
    },
    empPersonalEmail:{
        type : String
    },
    empPersonalContactNumber:{
        type : String
    },
    lastupdatedDate:{
        type : Date 
    },
    createdDate:{
        type : Date
    }
  
  

});

var CCRM_UXM_Associates=mongoose.model('CCRM_UXM_Associates',CCRM_UXM_Associates);

/*var Empschema=new CCRM_UXM_Associates({empId:'549287',empFirstName:'NaveenKumar',empLastName:'Vijayalingam',empTechmEmail:'NV00549287@TechMahindra.com',empBand:'U3',empRole:'Sr. Software Engineer',empContactNumber:'9940675290',empSkillSets:'HTML,CSS,JAVASCRIPT,REACT JS,ANGULAR,NODE JS',empPersonalEmail:'',empPersonalContactNumber:'',lastupdatedDate:new Date(),createdDate:new Date()});
Empschema.save();*/

module.exports = CCRM_UXM_Associates;
