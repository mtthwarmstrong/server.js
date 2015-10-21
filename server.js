
var express = require('express');
var app = express();
var path    = require("path");

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/start.html'));

});


app.get('/quiz1', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
app.use(express.static(path.join(__dirname, 'public')));
});


app.listen(process.env.PORT || 3000);


/*app.on('request' , function(req, res) {

	res.writeHead(200, {'Content-Type': 'text/html' });
	res.write('!!!!!!!!!!!!!!!!!!!!!!!!!!!');

	res.end();
}); 
*/

app.listen(4000); 






