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
		for(var i = 0; i < app.stack.length; i++) {
			console.log(app.stack[i].handle)
		}
		request(app)
		.get('/')      
		.expect('Access-Control-Allow-Headers', 'X-Custom')  
		.expect('Access-Control-Allow-Methods', 'GET')   
		.expect('Access-Control-Allow-Origin', '*') 
		.expect(200, done);
	})
})