'use strict';

describe('Simple Requests', function () {
    describe('GET', function () {
        it('should receive success response from server', function (done) {
            XHRHelper.Simple.GET('/allow/all', function (err, response) {
                expect(err).toBeNull();
                expect(response).not.toBeNull();
                done();
            });
        });

        it('should receive should error from server', function (done) {
            XHRHelper.Simple.GET('/allow/none', function (err, response) {
                expect(err).not.toBeNull();
                done();
            });
        });
    });
    describe('HEAD', function () { //application/x-www-form-urlencoded, multipart/form-data, or text/plain.
        it('should receive success response from server', function (done) {
            XHRHelper.Simple.HEAD('/allow/all', function (err, response) {
                expect(err).toBeNull();
                expect(response).not.toBeNull();
                done();
            });
        });

        it('should receive should error from server', function (done) {
            XHRHelper.Simple.HEAD('/allow/none', function (err, response) {
                expect(err).not.toBeNull();
                done();
            });
        });
    });
    describe('POST', function () { //application/x-www-form-urlencoded, multipart/form-data, or text/plain.
        describe('x-www-form-urlencoded', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/allow/all', 'payload=stuff', 'application/x-www-form-urlencoded', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/allow/all', {key: 'value'}, 'application/json', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });
        });
        describe('multipart/form-data', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/allow/all', 'payload=stuff', 'multipart/form-data', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/allow/none', 'payload=stuff', 'multipart/form-data', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });

        });
        describe('text/plain', function () {
            it('should receive success response from server', function (done) {
                XHRHelper.Simple.POST('/allow/all', 'payload', 'text/plain', function (err, response) {
                    expect(err).toBeNull();
                    expect(response).not.toBeNull();
                    done();
                });
            });
            it('should receive should error from server', function (done) {
                XHRHelper.Simple.POST('/allow/none', 'payload', 'text/plain', function (err, response) {
                    expect(err).not.toBeNull();
                    done();
                });
            });

        });

    });
});