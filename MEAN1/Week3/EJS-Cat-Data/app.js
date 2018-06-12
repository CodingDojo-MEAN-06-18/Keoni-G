var express = require('./node_modules/express');

var app = express();

app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + "/views");
app.set('view engine', 'ejs');

app.get('/cats', function(request, response) {
    response.render('cats');
});
app.get('/tabby', function(request, response) {
    cat = {
        name: "Bubbles",
        url: "/images/tabby.jpg",
        food: "Pizza",
        age: 5,
        moods: ["Happy", "Playful", "Hungry"],
    }
    response.render('display', {cat: cat});
});
app.get('/siamese', function(request, response) {
    cat = {
        name: "Pharaoh",
        url: "/images/siamese.jpg",
        food: "Hummus",
        age: 8,
        moods: ["Regal", "Domineering"],
    }
    response.render('display', {cat: cat});
});
app.get('/orange_tabby', function(request, response) {
    cat = {
        name: "Garfield",
        url: "/images/orange.jpg",
        food: "Spaghetti",
        age: 2,
        moods: ["Sleepy", "Tired", "Lazy"],
    }
    response.render('display', {cat: cat});
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});