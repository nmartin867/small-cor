describe('A suite', function () {
    var serverBaseUrl = 'http://localhost:3000';
    it('errors with out', function (done) {
        $.get(serverBaseUrl, function (data) {
            expect(data).toBe(null);
        }).fail(function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus + ' ' + errorThrown);
            expect(err).toBe(null);
            done('bad');
        });
    });
});