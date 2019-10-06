const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//crear el esquema de la placa y su modelo (coleccion)
const PlacaSchema = new Schema({
    name: String,
    measurement: {
        humidity: Number,
        temperature: Number,
        time: {
            type: Date,
            default: Date(),
        },
    },

    //add GeoLocation
});

const Placa = mongoose.model('placas', PlacaSchema);

module.exports = Placa; 