var request = require('supertest')
, express = require('express')
, smallCOR = require('../index.js');

var app = express();

app.use(smallCOR({
			origins : ['*'],
			methods : ['GET'],
			headers : ['X-Custom']
		}));

app.get('/', function(req, res){  
	res.send('hello world');
});

describe('Headers', function(){
	it('contains a single custom header', function(done){		
		request(app)
		.get('/')      
		.expect('Access-Control-Allow-Headers', 'X-Custom')    
		.expect(200, done);
	})

	it('contains GET as the only Access Control Allow Method', function(done){		
		request(app)
		.get('/')      
		.expect('Access-Control-Allow-Methods', 'GET')    
		.expect(200, done);
	})

	it('contains * as the only Access Control Allow Origin', function(done){		
		request(app)
		.get('/')      
		.expect('Access-Control-Allow-Origin', '*')    
		.expect(200, done);
	})
})