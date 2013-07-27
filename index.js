
var allowedOrigins = null;
var allowedMethods = null;
var allowedHeaders = null;

// the middleware function
module.exports = function smallCOR(options) {
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
			var responseOrigins = '';
			var length = allowedOrigins.length;
			for(var i = 0; i < length; ++i){
				responseOrigins += allowedOrigins[i];
				if(i !== (length - 1))
					responseOrigins += ',';
			}			
			res.setHeader('Access-Control-Allow-Origin', responseOrigins);
		}
		if(allowedMethods !== null){
			var responseMethods = '';
			var length = allowedMethods.length;
			for(var i = 0; i < length; ++i){
				responseMethods += allowedMethods[i];
				if(i !== (length - 1))
					responseMethods += ',';
			}		
			res.setHeader('Access-Control-Allow-Methods', responseMethods);
		}
		if(allowedHeaders !== null){
			var responseHeaders = '';
			var length = allowedHeaders.length;
			for(var i = 0; i < length; ++i){
				responseHeaders += allowedHeaders[i];
				if(i !== (length - 1))
					responseHeaders += ',';
			}			
			res.setHeader('Access-Control-Allow-Headers', responseHeaders);
		}

    //ack the pre-flight
    if ('OPTIONS' == req.method) {
    	res.send(200);
    }
    else {
    	next();
    }
};
};