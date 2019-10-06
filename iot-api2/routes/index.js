const { Router } = require('express');
const router = Router();

//routes
router.get('/api', (req, res) => {
    const data = { "Type": "GET" };
    res.json(data);
})

module.exports = router; 