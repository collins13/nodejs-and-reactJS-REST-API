const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


//set express app

const app = express();

//connect to mongoose

mongoose.connect('mongodb://localhost/ninjago', { useNewUrlParser: true });
mongoose.Promise = global.Promise;
app.use(bodyParser.json());
//initialize routes
app.use('/api', require('./routes/api'));

//error handling

app.use(function(err, req, res, next){
  //console.log(err);
  res.status(422).send({error: err.message});
});


//listen for request

app.listen(process.env.port || 8000, function(){
  console.log("hey, the port is now listening for requests");

})
