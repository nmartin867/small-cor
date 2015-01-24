var express = require('express')
    , simple = require('./routes/simple')
    , app = express();

app.use('/open', function(req, res, next){

});
app.use('/open', simple);
module.exports = app;