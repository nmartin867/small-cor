var request = require('supertest')
    , express = require('express')
    , SmallCOR = require('../index')
    , assert = require('assert')
    , app = express();


app.use('/single', new SmallCOR());

app.use('/multi', SmallCOR({
    origin: '*',
    methods: ['GET'],
    headers: ['X-Custom', 'X-Small']
}));

app.get('/single', function (req, res) {
    res.send(200);
});

app.get('/multi', function (req, res) {
    res.send(200);
});

describe('HTTP Headers [array]', function () {
    it('contains a single header', function (done) {
        request(app)
            .get('/single')
            .expect(200, done)
            .end(function (err, res) {
                console.log(res.headers['Access-Control-Allow-Headers']);
            });
    });
});

