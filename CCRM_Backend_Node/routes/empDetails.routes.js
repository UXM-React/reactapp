const express = require('express');
const router = express.Router();
const authJwtVerify=require("../auth");


// Require the controllers WHICH WE DID NOT CREATE YET!!
const expExpDet_controller= require('../controller/empDetails.controller');


// a simple test url to check that all of our files are communicating correctly.

router.post('/create', expExpDet_controller.expExpDet_create);

//retriving data by particular ID from table
router.get('/getEmpDetailsByID/:id', expExpDet_controller.expExpDet_getbyId);

//Retriving all the data from the table
router.get('/get', expExpDet_controller.expExpDet_get);

router.get('/delete/:id', expExpDet_controller.empDetails_delete);

//final retriving data by particular ID and update.
router.put('/getdataUpdateEmpDetails/:id', expExpDet_controller.expExpDet_getbyIdAndUpdate);


module.exports = router;