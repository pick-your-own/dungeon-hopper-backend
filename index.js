'use strict';

require('dotenv').config();

const PORT = process.env.PORT;
const { start } = require('./src/server');




try{
  start(PORT);    
}
catch(error){
  console.error(error);
}
