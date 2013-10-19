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
	res.send(201,{message: 'meow'});
});


describe('Headers', function(){
	it('contains a single custom header', function(done){		
		request(app)
		.get('/')      
		.expect('Access-Control-Allow-Headers', 'X-Custom')
		.expect(201)
		.end(function(err, res){
			if(err) throw err;
			done();
		});
	});
});