const express = require('express');
const router = express.Router();



//GET a list of ninjas from database
router.get('/ninjas', function (req, res) {
    res.send({ type: 'GET' });
});


//ADD a list of ninjas from database
router.post('/ninjas', function (req, res) {
    console.log(req.body);
    res.send({
        type: 'POST',
        name: req.body.name,
        age: req.body.age
    });
});


//UPDATE a list of ninjas from database
router.put('/ninjas/:id', function (req, res) {
    res.send({ type: 'PUT' });
});


//DELETE a list of ninjas from database
router.delete('/ninjas/:id', function (req, res) {
    res.send({ type: 'DELETE' });
});

module.exports = router; 