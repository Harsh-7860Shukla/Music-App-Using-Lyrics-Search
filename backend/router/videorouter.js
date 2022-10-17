const express = require('express');
const router = express.Router();

router.get('/add', (req, res) => {
    res.send('add video request!!');
});

router.get('/getall', (req, res) => {
    res.send('get all video request!!');
})

module.exports = router;