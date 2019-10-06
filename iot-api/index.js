const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');

//configurar aplicación express
const app = express();

//Settings
app.use(cors({ origin: true, credentials: true }));
app.set('port', 3022);
app.set('json spaces', 2);



//connectar con mongodb

let url = 'mongodb://juan:vivoenpomona@cluster0-shard-00-00-2tcmk.mongodb.net:27017,cluster0-shard-00-01-2tcmk.mongodb.net:27017,cluster0-shard-00-02-2tcmk.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Laboratorio'
}

mongoose.connect(url, options).then(function () {
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
