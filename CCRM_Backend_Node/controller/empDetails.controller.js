const expExpDet = require('../models/empDetails.model');

exports.expExpDet_create = function (req, res) {
    let expExpDet = new expExpDet(
        {
            empId:req.body.empId,
            empFirstName:req.body.empFirstName,
            empLastName:req.body.empLastName,
            empTechmEmail:req.body.empTechmEmail,
            empBand:req.body.empBand,
            empRole:req.body.empRole,
            empContactNumber:req.body.empContactNumber,
            empSkillSets:req.body.empSkillSets,
            empPersonalEmail:req.body.empPersonalEmail,
            empPersonalContactNumber:req.body.empPersonalContactNumber,
            lastupdatedDate:new Date(),
            createdDate:req.body.createdDate
        }
    );

    expExpDet.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Associate Created successfully')
    })
};

//Simple delete the details from DB
exports.empDetails_delete = function (req, res) {
    expExpDet.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};


exports.expExpDet_get = function (req, res) {
    
    expExpDet.find({}).exec(function(err, result) {
        console.log(result+'test');
        res.send(result);
    });
};

exports.expExpDet_getbyIdAndUpdate = function (req, res) {
    var loadD =
        {
            empFirstName:req.body.empFirstName,
            empLastName:req.body.empLastName,
            empTechmEmail:req.body.empTechmEmail,
            empBand:req.body.empBand,
            empRole:req.body.empRole,
            empContactNumber:req.body.empContactNumber,
            empSkillSets:req.body.empSkillSets,
            empPersonalEmail:req.body.empPersonalEmail,
            empPersonalContactNumber:req.body.empPersonalContactNumber,
            lastupdatedDate:new Date()     
           
        };
        
        expExpDet.findByIdAndUpdate(req.params.id,{$set:loadD},(err, doc)=>{
    
        if(!err){res.send("Updated Successfully");}
        else{ console.log('error in update:'+JSON.stringify(err,undefined,2));res.send("Failure");}
    });
};


exports.expExpDet_getbyId = function (req, res) {
   
    expExpDet.findById(req.params.id,function(err, result) {
        //  console.log(result+'test');
          res.send(result);
  
      });
     
       
    };
