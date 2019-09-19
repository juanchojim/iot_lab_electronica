const express = require('express');
const app = express();
//const morgan = require('morgan');

//configuraciones
app.set('port', 3000)

//middlewares
//app.use(morgan('dev'));
app.use(express.json());

//routes
app.get('/', (req, res) => {
    console.log("hello world");
});

//Empezando el server
app.listen(app.get('port'), () => {
    console.log("Servidor iniciado");
});
