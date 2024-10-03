const connection = require('./database');

const express = require('express');
const morgan = require('morgan')
const cors = require('cors');
const app = express();

var compression = require('compression');

app.use(compression());

//npm install socket.io, http --save
//var server = require('http').Server(app);
//var io = require('socket.io').listen(server);

// require request-ip and register it as middleware
var requestIp = require('request-ip');
var net = require('net');

app.use(requestIp.mw({ attributeName : 'myCustomAttributeName' }))

// Settings
const PORT_AUX = 8085;

//Puerto de la BD
app.set('port', process.env.PORT || PORT_AUX);

// Middlewares 
app.use(morgan('dev'));
app.use(cors());

//Maximo tamaño de ficheros que se pasan
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb', extended: false}));

// Routes
app.use('/ecomm/', require('./routes/ecom.routes'));

//Se comprimen los datos enviados
app.compression = true;

//starting the server
 app.listen(app.get('port'), () => {
     console.log(`Server on port ${app.get('port')}`);
 });


console.log('Carga Middlewares Ok')