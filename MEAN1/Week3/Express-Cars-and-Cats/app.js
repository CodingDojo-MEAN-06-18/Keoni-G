var express = require('./node_modules/express');

var app = express();

app.use(express.static(__dirname + '/static')),

app.get('/', function(request, response) {
    response.sendFile(__dirname + "/static/views/index.html");
});
app.get('/cars.html', function(request, response) {
    response.sendFile(__dirname + "/static/views/cars.html");
});
app.get('/cats.html', function(request, response) {
    response.sendFile(__dirname + "/static/views/cats.html");
});
app.get('/form.html', function(request, response) {
    response.sendFile(__dirname + "/static/views/new_car.html");
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});