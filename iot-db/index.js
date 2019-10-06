let mongoose = require('mongoose');
let placaSchema = require('./agente');

//Libreria para promises personalizadas.
mongoose.Promise = require('bluebird');

const uri = "mongodb://juan:vivoenpomona@cluster0-shard-00-00-2tcmk.mongodb.net:27017,cluster0-shard-00-01-2tcmk.mongodb.net:27017,cluster0-shard-00-02-2tcmk.mongodb.net:27017/admin?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
const options = {
    useNewUrlParser: true,
    dbName: 'Laboratorio',
}

module.exports = async function connect() {
    let conn = await mongoose.createConnection(uri, options);
    return {
        placa: conn.model('placas', placaSchema)
    }
}