var request = require('supertest')
    , express = require('express')
    , SmallCOR = require('../index')
    , assert = require('assert')
    , app = express();


app.use('/', SmallCOR({
    origin: '*',
    methods: ['GET'],
    headers: ['X-Custom', 'X-Small']
}));

describe('HTTP Headers [array]', function () {
    it('contains a single header', function (done) {
        request(app)
            .get('/')
            .set('X-Requested-With', 'XMLHttpRequest')
            .expect(200, done)
            .end(function (err, res) {
                console.log(res.headers['Access-Control-Allow-Headers']);
            });
    });
});

