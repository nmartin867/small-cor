
var allowedOrigin = null;
var allowedMethods = null;
var allowedHeaders = null;
var allowedCredentials = false; 

// the middleware function
module.exports = function(options) {
	for(var o in options){		
		if(o === 'origin'){
			allowedOrigin = options[o];
		}
		if(o === 'methods'){
			allowedMethods = options[o];
		}
		if(o === 'headers'){
			allowedHeaders = options[o];
		}
		if(o === 'credentials'){
			if(options[o]){
				allowedCredentials = true;
			}
		}
	}

	return function smallcor(req, res, next) {
		if(allowedOrigin !== null){			
			res.setHeader('Access-Control-Allow-Origin', allowedOrigin);
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
		if(allowedCredentials){
			res.setHeader('Control-Allow-Credentials', true);			
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