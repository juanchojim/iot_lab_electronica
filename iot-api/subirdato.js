//Esta va a ser la forma en que crearemos los datos en la API.
const dbConnect = require('../iot-db');
let Agent;

const obtenerModelo = async function (obj) {
    if (!Agent) {
        const db = await dbConnect();
        Agent = db.placa;
        let Oreo = await Agent(obj);

        Oreo.save(function (err) {
            if (err) throw err;
            console.log("Medición del sensor Guardada");
        })

        Agent = undefined;
    }
}

module.exports = obtenerModelo;





