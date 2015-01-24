var express = require('express');
var router = express.Router();

router.get('/allow/all', function (req, res, next) {
    res.json({msg: 'hello'});
});
router.get('/allow/none', function (req, res, next) {
    res.json({msg: 'hello'});
});

router.head('/allow/all', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.status(200).end();
});

router.head('/allow/none', function (req, res, next) {
    res.status(200).end();
});

router.post('/allow/all', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.json({msg: 'hello'});
});

router.post('/allow/none', function (req, res, next) {
    res.json({msg: 'hello'});
});

module.exports = router;