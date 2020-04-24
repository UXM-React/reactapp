const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override')

const loginCheck = require('./routes/loginCheck.routes'); // Imports routes for the products
const expExpDet = require('./routes/empDetails.routes'); // Imports routes for the products

//import expDataSet from './models/expDataSet.model';


// initialize our express app
const app = express();


// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://localhost/CCRM_UXM';
const mongoDB = dev_db_url;
var options = {
    useNewUrlParser: true ,
    
};
mongoose.connect(mongoDB,options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function callback () {
    console.log("MongoDB connection success");
  });

  var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  }
  
app.use(allowCrossDomain);
app.use(bodyParser.json({limit: '500mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '500mb', extended: true}))
app.use(methodOverride())
app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)
//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended: true, parameterLimit: 1000000}));
app.use('/empDetails', expExpDet);
app.use('/loginCheck', loginCheck);
app.get('*', function(req, res){
  res.send('Request Not Valid', 404);
});


function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function clientErrorHandler (err, req, res, next) {
  if (req.xhr) {
    res.status(500).send({ error: 'Something failed!' })
  } else {
    next(err)
  }
}
function errorHandler (err, req, res, next) {
  res.status(500)
  res.render('error', { error: err })
}


module.exports = app;