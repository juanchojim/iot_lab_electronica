const { Router } = require('express');
const router = Router();
const data = require('../routes/sample.json')

router.get('/movies', (req, res) => {
    res.json(data);
})

module.exports = router;