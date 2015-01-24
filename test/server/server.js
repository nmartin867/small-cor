var express = require('express')
    , SmallCOR = require('../../index')
    , app = express();

app.use('/', SmallCOR({
    origin: '*',
    methods: ['GET'],
    headers: ['X-Custom', 'X-Small']
}));

module.exports = app;