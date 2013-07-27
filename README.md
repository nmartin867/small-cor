small-cor
========

Very light weight middleware for [Express](https://github.com/visionmedia/express) which makes cross origin resource sharing easy.

---

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
    origins : ['*'],
	methods : ['GET'],
	headers : ['X-Custom']
}));

app.get('/', function(req, res){
  res.json({message : 'hello'});
});

app.listen(3000);
```
