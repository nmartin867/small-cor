'use strict';

describe('Simple Requests', function () {
    describe('GET', function () {
        it('should receive success response from server', function (done) {
            XHRHelper.Simple.GET('/open', null, function (err, response) {
                expect(err).toBeNull();
                expect(response).not.toBeNull();
                done();
            });
        });
        it('should receive should error from server when sending custom header', function (done) {
            XHRHelper.Simple.GET('/open', {'X-Ping': 'PONG'}, function (err, response) {
                expect(err).not.toBeNull();
                done();
            });
        });

        it('should receive should error from server', function (done) {
            XHRHelper.Simple.GET('/closed', null, function (err, response) {
                expect(err).not.toBeNull();
                done();
            });
        });
    });
    describe('HEAD', function () {
        it('should receive success response from server', function (done) {
            XHRHelper.Simple.HEAD('/open', null, function (err, response) {
                expect(err).toBeNull();
                expect(response).not.toBeNull();
                done();
            });
        });

        it('should receive should error from server', function (done) {
            XHRHelper.Simple.HEAD('/closed', null, function (err, response) {
                expect(err).not.toBeNull();
                done();
            });
        });
    });
    describe('POST', function () {
        describe('x-www-form-urlencoded', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/open', null, 'payload=stuff', 'application/x-www-form-urlencoded', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/closed', null, {key: 'value'}, 'application/json', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });
        });
        describe('multipart/form-data', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/open', null, 'payload=stuff', 'multipart/form-data', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/closed', null, 'payload=stuff', 'multipart/form-data', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });

        });
        describe('text/plain', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/open', null, 'payload', 'text/plain', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/closed', null, 'payload', 'text/plain', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });

        });

    });
    describe('Allow Example.com domain', function () {
        describe('GET', function () {
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.GET('/domain', null, function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });
        });
        describe('HEAD', function () {
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.HEAD('/domain', null, function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });
        });
        describe('POST', function () {
            describe('x-www-form-urlencoded', function () {
                it('should receive should error from server', function (done) {
                    XHRHelper.Simple.POST('/domain', null, {key: 'value'}, 'application/json', function (err, response) {
                        expect(err).not.toBeNull();
                        done();
                    });
                });
            });
            describe('multipart/form-data', function () {
                it('should receive should error from server', function (done) {
                    XHRHelper.Simple.POST('/domain', null, 'payload=stuff', 'multipart/form-data', function (err, response) {
                        expect(err).not.toBeNull();
                        done();
                    });
                });

            });
            describe('text/plain', function () {
                it('should receive should error from server', function (done) {
                    XHRHelper.Simple.POST('/domain', null, 'payload', 'text/plain', function (err, response) {
                        expect(err).not.toBeNull();
                        done();
                    });
                });

            });

        });
    });
});