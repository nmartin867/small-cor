var _ = require('lodash');

module.exports = function (options) {
    _.merge({credentials: false}, options);
    return function (req, res, next) {
        if (!_.isUndefined(options.origin))
            res.setHeader('Access-Control-Allow-Origin', this.origin);
        if (!_.isUndefined(options.methods)) {
            options.methods = _.isArray(options.methods) ? _.uniq(options.methods).join(',').toUpperCase() : options.methods;
            res.setHeader('Access-Control-Allow-Methods', options.methods);
        }
        if (!_.isUndefined(options.headers)) {
            options.headers = _.isArray(options.headers) ? _.uniq(options.headers).join(',').toUpperCase() : options.headers;
            res.setHeader('Access-Control-Allow-Headers', options.headers);
        }
        if (options.credentials === true || options.credentials === 'true')
            res.setHeader('Control-Allow-Credentials', true);

        if ('OPTIONS' == req.method) {
            res.send(200);
        }
        else {
            next();
        }
    };
};