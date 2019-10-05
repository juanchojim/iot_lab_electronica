const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

//configurar aplicación express
const app = express();


app.use(bodyParser.json());



//inicializar rutas
app.use('/api/', routes);


app.listen(3000, function () {
    console.log('Escuchando en el puerto 3000');
});
