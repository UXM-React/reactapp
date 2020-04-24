const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const login_controller= require('../controller/loginCheck.controller');


// a simple test url to check that all of our files are communicating correctly.

router.post('/login', login_controller.login_check);


module.exports = router;