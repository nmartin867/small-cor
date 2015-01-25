var express = require('express')
    , smallcor = require('../../index')
    , simple = require('./routes/simple')
    , app = express();


app.use('/open', smallcor({
    origins: '*',
    headers: '*'
}));

app.use('/open', simple);

app.use('/closed', simple);

app.use('/domain', smallcor({
    origins: 'example.com',
    headers: '*'
}));

app.use('/domain', simple);
module.exports = app;