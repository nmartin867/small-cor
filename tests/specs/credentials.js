var request = require('supertest')
    , express = require('express')
    , smallcor = require('../../index')
    , assert = require('assert');


describe('Credentials', function () {
    it('should return access-control-allow-credentials: true', function (done) {
        var app = express();
        app.use(smallcor({
            origins: '*'
        }));
        app.use('/', function(req, res){
            res.status(200).end();
        });
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                var useCreds = res.headers['access-control-allow-credentials'];
                assert(useCreds, 'Allow-Credentials should be true');
                done();
            });
    });
    it('should return access-control-allow-credentials: false', function (done) {
        var app = express();
        app.use(smallcor({
            origins: '*',
            credentials: false
        }));
        app.use('/', function(req, res){
            res.status(200).end();
        });
        request(app)
            .get('/')
            .expect(200)
            .end(function (err, res) {
                var useCreds = res.headers['access-control-allow-credentials'];
                assert(useCreds === 'false', 'Allow-Credentials should be false');
                done();
            });
    });
});

