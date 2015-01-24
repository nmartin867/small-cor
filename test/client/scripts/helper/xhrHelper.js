'use strict';
(function (window, $) {
    if (typeof $ === 'undefined' || $ === null) {
        throw new Error('Where is jQuery YO?!');
    }
    window.XHRHelper = {};
    var SERVICE_BASE = 'http://localhost:9000';
    XHRHelper.Simple = {
        GET: function (route, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "GET",
                url: requestUrl,
                success: function (response) {
                    callback(null, response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    callback(errorThrown);
                }
            });
        },
        HEAD: function (route, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "HEAD",
                url: requestUrl,
                success: function (response) {
                    callback(null, response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    callback(errorThrown);
                }
            });
        },
        POST: function (route, data, contentType, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "POST",
                url: requestUrl,
                data: data,
                contentType: contentType,
                success: function (response) {
                    callback(null, response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    callback(errorThrown);
                }
            });
        }
    };
    return XHRHelper;

})(window, jQuery);
