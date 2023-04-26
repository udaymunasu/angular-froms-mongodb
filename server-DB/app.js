require('./config/mongo.config.json')
require('./model/mongo');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.port || 3001;
var usersRouter = require('./routes/api/users');
var app= express();


app.get('/',(req,res)=>{
  res.send(" ahello world")
})

//middleware ff
app.use(bodyParser.json());
app.use(cors());

/* api end points*/
app.use('/api',usersRouter);

//start server
app.listen(port,()=>{
  "server connected on : ", port});
