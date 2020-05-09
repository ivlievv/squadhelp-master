const express = require('express');
const router = require('./router');
const cors = require('cors');
const handlerError = require('./handlerError/handler');
const loggerError = require('./handlerError/logger')

const app = express()


app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use(router);
app.use(loggerError);
app.use(handlerError);


module.exports=app;