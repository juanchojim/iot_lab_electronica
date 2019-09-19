var mqtt = require('mqtt');
var options = {
    port: 13594,
    host: 'mqtt://soldier.cloudmqtt.com',
    clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
    username: 'ippytged',
    password: 'GtFKYEPPiBgW',
    clean: true,
};

let client = mqtt.connect(options.host, options);
client.on('connect', function () { // Cuando se conecte: 
    console.log('connectado Correctamente');

    //El cliente se suscribe a un topic: 
    client.subscribe("placa1/temperatura", () => {
        client.on("message", (topic, message) => {
            console.log("Recibido '" + message + "' de'" + topic + "'");
        });
    });

});


