var express = require('express')
    , smallcor = require('../../index')
    , simple = require('./routes/simple')
    , app = express();

app.use('/domain', function (req, res, next) {
    res.set('Access-Control-Allow-Origin', 'example.com');
    next();
});
app.use('/open', smallcor({
    origins: '*',
    headers: '*'
}));
app.use('/open', simple);
app.use('/closed', simple);
app.use('/domain', simple);
module.exports = app;