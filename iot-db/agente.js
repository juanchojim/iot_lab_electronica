const mongoose = require('mongoose');
const Schema = mongoose.Schema;

placa = {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    measurement: {
        humidity: Number,
        temperature: Number,
        time: {
            type: Date,
            default: Date.now()
        },
    }
}
const placaSchema = new Schema(placa);
module.exports = placaSchema; 