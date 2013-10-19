small-cor
========

[![Build Status](https://travis-ci.org/nmartin867/small-cor.png)](https://travis-ci.org/nmartin867/small-cor)

Very light weight middleware for [Express](https://github.com/visionmedia/express) which makes cross origin resource sharing easy.



## Installation
```
npm install small-cor
```
## Sample Usage
```js
var express = require('express');
var app = express();
var smallCOR = require('small-cor');

app.use(smallCOR({
    origin : '*',
	methods : ['GET'],
	headers : ['X-Custom']
}));

app.get('/', function(req, res){
  res.json({message : 'hello'});
});

app.listen(3000);
```
An HTTP GET request to localhost:3000 will result in HTTP response which contains the following headers:
```
Access-Control-Allow-Headers:X-Custom
Access-Control-Allow-Methods:GET
Access-Control-Allow-Origin:*
```
Options
=======
* `origin`  (string): URI of allowed origin. i.e. `'*'` or `'http://mysite.com'`
* `methods` (array): Array of strings containing permitted HTTP verbs i.e. `['GET']` or `['GET','POST']`
* `headers`  (array): Array of strings containing permitted HTTP headers i.e. `['X-Custom']` or `['X-Custom', 'X-PingPong']`
* `credentials`  (bool): Boolean indicating if browser will allow creditials to be sent. 
