'use strict';
require('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const {PORT} = require('./config');
const app = express();

if(process.env.ENV === 'development') app.use(morgan('dev'));
else app.use(morgan('common'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('*', (req, res) => {
  return res.status(404).json({message: 'Not Found'});
});
if (app.get('env') === 'development' || app.get('env' === 'testing')) {
  app.use((err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

app.use((err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

app.post('/api/', bodyParser.json(), (req, res=>{
  console.log(req.body);
})
)

let server;
function runServer(){
  return new Promise((resolve, reject)=>{
    server.app.listen(PORT, () =>{
      console.info(`Your app is listening on PORT`);
      resolve();
    })
  .on('error', err=>{
    reject(err);
  });
});
}

function closeServer(){
return new Promise((resolve, reject) =>{
  server.close(err => {
    if (err){
      return reject(err);
    }
  resolve();
});
});
}

if (require.main === module){
  runServer().catch(err => console.error(err));
}

module.exports = {app, runServer, closeServer};