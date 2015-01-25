var request = require('supertest')
    , express = require('express')
    , smallcor = require('../../index')
    , assert = require('assert')
    , app = express();

var requestErr;

app.use(smallcor({
    origins: '*'
}));

app.use('/', function (req, res, next) {
    res.status(200).send('ok');
});

describe('Accepted Origins', function () {

    it('should return Access-Control-Allow-Origin: *', function (done) {
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                var accessOrigin = res.headers['access-control-allow-origin'];
                assert(accessOrigin === '*');
                done();
            });
    });

    it('should return Access-Control-Allow-Origin: example.com', function (done) {
        app = express();
        app.use(smallcor({
            origins: 'example.com'
        }));
        app.use('/', function (req, res, next) {
            res.status(200).send('ok');
        });
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                var accessOrigin = res.headers['access-control-allow-origin'];
                assert(accessOrigin === 'example.com');
                done();
            });
    });

    it('should return Access-Control-Allow-Origin: mysite.com', function (done) {
        app = express();
        app.use(smallcor({
            origins: ['example.com', 'mysite.com']
        }));
        app.use('/', function (req, res, next) {
            res.status(200).send('ok');
        });
        request(app)
            .get('/')
            .set('Host', 'mysite.com')
            .expect(200)
            .end(function (err, res) {
                var accessOrigin = res.headers['access-control-allow-origin'];
                assert(accessOrigin === 'mysite.com', 'Allow-Origin should be mysite.com but was ' + accessOrigin);
                done();
            });
    });

    it('should pass error if origins is not set', function (done) {
        app = express();
        app.use(smallcor());
        app.use('/', function (req, res, next) {
            res.status(200).send('ok');
        });
        app.use(function(err, req, res, next) {
            res.status(500).send(err.message);
        });
        request(app)
            .get('/')
            .set('Host', 'mysite.com')
            .expect(500)
            .end(function (err, res) {
                assert(res.text === '`origins` is required for small-cor');
                assert(res.statusCode === 500, 'err should be passed.');
                done();
            });
    });
});

