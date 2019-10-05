const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//crear el esquema de la placa y su modelo (coleccion)
const PlacaSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    measurement: {
        humidity: Number,
        temperature: Number,
        time: {
            type: Date,
            default: Date(),
        },
    }

}); 