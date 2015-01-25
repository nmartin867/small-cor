var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.json({value: 'test'});
});

router.head('/', function (req, res, next) {
    res.status(200).end();
});

router.post('/', function (req, res, next) {
    res.status(200).end();
});


module.exports = router;