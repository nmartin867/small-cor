'use strict';
(function (window, $) {
    if (typeof $ === 'undefined' || $ === null) {
        throw new Error('Where is jQuery YO?!');
    }
    window.XHRHelper = {};
    var SERVICE_BASE = 'http://localhost:9000';
    XHRHelper.Simple = {
        GET: function (route, headers, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "GET",
                url: requestUrl,
                headers: headers,
                success: function (response) {
                    callback(null, response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    callback(textStatus + ' ' + errorThrown);
                }
            });
        },
        HEAD: function (route, headers, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "HEAD",
                url: requestUrl,
                headers: headers,
                success: function (response) {
                    callback(null, response);
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    callback(errorThrown);
                }
            });
        },
        POST: function (route, headers, data, contentType, callback) {
            var requestUrl = SERVICE_BASE + route;
            $.ajax({
                type: "POST",
                url: requestUrl,
                data: data,
                contentType: contentType,
                headers: headers,
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
