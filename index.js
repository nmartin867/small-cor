
var allowedOrigins = null;
var allowedMethods = null;
var allowedHeaders = null;

// the middleware function
module.exports = function(options) {
	for(var o in options){
		if(o === 'origins'){
			allowedOrigins = options[o];
		}
		if(o === 'methods'){
			allowedMethods = options[o];
		}
		if(o === 'headers'){
			allowedHeaders = options[o];
		}
	}

	return function(req, res, next) {
		if(allowedOrigins !== null){
			var responseOrigins = null;
			var length = allowedOrigins.length;
			for(var i = 0; i < length; ++i){
				responseOrigins += allowedOrigins[i];
				if(i !== (length - 1))
					responseOrigins += ',';
			}
			res.header('Access-Control-Allow-Origin', responseOrigins);
		}
		if(allowedMethods !== null){
			var responseMethods = null;
			var length = allowedMethods.length;
			for(var i = 0; i < length; ++i){
				responseMethods += responseMethods[i];
				if(i !== (length - 1))
					responseMethods += ',';
			}
			res.header('Access-Control-Allow-Methods', responseMethods);
		}
		if(allowedHeaders !== null){
			var responseHeaders = null;
			var length = allowedHeaders.length;
			for(var i = 0; i < length; ++i){
				responseHeaders += responseHeaders[i];
				if(i !== (length - 1))
					responseHeaders += ',';
			}
			res.header('Access-Control-Allow-Headers', responseHeaders);
		}

    //ack the pre-flight
    if ('OPTIONS' == req.method) {
    	res.send(200);
    }
    else {
    	next();
    }
};