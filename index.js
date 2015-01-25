/*!
 * small-cor
 * Copyright(c) 2015 Nick Martin
 * MIT Licensed
 */

/**
 * Expose the middleware.
 */

exports = module.exports = smallcor;

function smallcor(options) {
    var options = options || {}
        , origins = options.origins
        , headers = options.headers
        , methods = options.methods
        , max_age = options.max_age
        , credentials = options.credentials || false;

    return function (req, res, next) {
        //bail if `origins` is not given
        if (!origins) next(new Error('`origins` is required for small-cor'));
        setAllowedOrigin(req, res, next);
        setCredentials(res);
        if (req.method === 'OPTIONS') {
            setAllowedMethods(res, next);
            setAllowedHeaders(res, next);
            setAllowedHeaders(res, next);
            setMaxAge(res, next);
        }
        next();
    };

    /**
     * Set response Allowed Origin.
     */

    function setAllowedOrigin(req, res, next) {
        if (typeof origins === 'string') {
            res.set('Access-Control-Allow-Origin', origins);
            return;
        }
        else if (origins instanceof Array) {
            var idx = origins.indexOf(req.hostname);
            var headerValue = idx > -1 ? origins[idx] : null;
            res.set('Access-Control-Allow-Origin', headerValue);
            return;
        }
        next(new Error('`origins` should be Array or string'));
    }

    /**
     * Set use Credentials.
     */

    function setCredentials(res) {
        var useCreds = credentials === true ? true : false;
        res.set('Access-Control-Allow-Credentials', useCreds);
    }

    /**
     * Set response Allowed Methods.
     */

    function setAllowedMethods(res, next) {
        if (methods) {
            if (typeof methods === 'string') {
                res.set('Access-Control-Allow-Methods', methods);
                return;
            } else if (methods instanceof Array) {
                res.set('Access-Control-Allow-Methods', methods.join(', '));
                return;
            }
            next(new Error('`methods` should be Array or string'));
        }
        res.set('Access-Control-Allow-Methods', '*');
    }

    /**
     * Set response Allowed Headers.
     */

    function setAllowedHeaders(res, next) {
        if (headers) {
            if (typeof headers === 'string') {
                res.set('Access-Control-Allow-Methods', headers);
                return;
            } else if (headers instanceof Array) {
                res.set('Access-Control-Allow-Methods', headers.join(', '));
                return;
            }
            next(new Error('`headers` should be Array or string'));
        }
        res.set('Access-Control-Allow-Headers', '*');
    }

    /**
     * Set response cache Max Age.
     */

    function setMaxAge(res, next) {
        if (max_age) {
            var age = parseInt(max_age, 10);
            if (age !== NaN) {
                res.set('Access-Control-Max-Age', age);
                return;
            }
            next(new Error('`max_age` needs to be numeric'));
        }
    }
}

