const mqtt = require('async-mqtt');
const mongoose = require('mongoose');
const obtenerModelo = require('../iot-api/subirdato');

var options = {
    port: 13594,
    host: 'mqtt://soldier.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'ippytged',
    password: 'GtFKYEPPiBgW',
    clean: true,
};

async function run() {
    const client = await mqtt.connectAsync(options.host, options);
    console.log("Empezando");
    try {
        await client.subscribe("placa1/temperatura");

        await client.on("message", callForBD);

    } catch (e) {
        console.log(e.stack);
        process.exit();
    }
}

//callback que envía los datos a mongoDB
const callForBD = function (topic, message) {

    //Variables recibidas.
    const msg = (message + "").trim();
    console.log("callforBD ");
    obj = {
        _id: mongoose.Types.ObjectId(),
        name: "Oreo",
        measurement: {
            humidity: parseFloat(msg),
            temperature: parseFloat(msg) + 30,
        }
    }
    obtenerModelo(obj);
}


run();




