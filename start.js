var express = require('express');
var app = express();
var path = require('path');

//app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'views'))); 
app.engine('.html', require('ejs').__express);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/:code', function(req, res) {
    var val = req.params.code.split('=')[1];
     res.render(path.join(__dirname, '/views/index1.html'), {query : val});
});

app.listen(8080);

console.log("listening to 8080");