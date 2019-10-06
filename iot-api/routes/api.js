const express = require('express');
const router = express.Router();
const Placa = require('../models/placa');

//GET a list of ninjas from database
router.get('/placas', function (req, res) {
    Placa.find({}, function (err, response) {
        res.json(response);
    })

});

//ADD a list of ninjas from database
router.post('/placas', function (req, res) {
    Placa.create(req.body).then(function (placa) {
        res.send(placa);
    });
});


//UPDATE a list of ninjas from database
router.put('/placas/:id', function (req, res) {
    res.send({ type: 'PUT' });
});


//DELETE a list of ninjas from database
router.delete('/placas/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router; 