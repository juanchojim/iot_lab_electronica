const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//configurar aplicación express
const app = express();

//Settings
app.set('port', 3000);
app.set('json spaces', 2);



//connectar con mongodb

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect('mongodb://localhost/ninjago', options).then(function () {
    console.log("conectado satisfactoriamente");
});

mongoose.Promise = global.Promise;

//Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(bodyParser.json());

//inicializar rutas
app.use('/api/', routes);


//Servidor
app.listen(app.get('port'), function () {
    console.log(`Escuchando en el puerto ${app.get('port')}`);
});
