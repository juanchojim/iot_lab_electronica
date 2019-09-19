let mongoose = require('mongoose');
let placaSchema = require('./agente');

const uri = "mongodb://juan:vivoenpomona@cluster0-shard-00-00-2tcmk.mongodb.net:27017,cluster0-shard-00-01-2tcmk.mongodb.net:27017,cluster0-shard-00-02-2tcmk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"

const options = {
    useNewUrlParser: true,
    dbName: 'Laboratorio',
}

mongoose.connect(uri, options, function (err) {
    if (err) throw err;
    console.log('Conectado correctamente');
});



let Sensor = mongoose.model('placa', placaSchema);


let Oreo = new Sensor({
    _id: new mongoose.Types.ObjectId(),
    name: "Oreo",
    measurement: {
        humidity: 15,
        temperature: 2.2,
    }
});


Oreo.save(function (err) {
    if (err) throw err;
    console.log("Medición del sensor Guardada");
})




//https://code.tutsplus.com/es/articles/an-introduction-to-mongoose-for-mongodb-and-nodejs--cms-29527