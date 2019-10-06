const express = require('express');
const app = express();
const router = require('./routes/index');
const routerMovies = require('./routes/movies');
const morgan = require('morgan');


//Problema del cors
const cors = require('cors');


//settings
app.set('port', 3000);
app.set('json spaces', 2);

//Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use("/api", router);
app.use("/api", routerMovies);


//Servidor
app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto 3000");
});