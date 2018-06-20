const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
mongoose.connect('mongodb://localhost/quoting_dojo');
const app = express();

var QuoteSchema = new mongoose.Schema({
    author: { type: String, required: true, minlength: 2 },
    quote: { type: String, required: true, minlength: 2 },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Quote', QuoteSchema);

var Quote = mongoose.model('Quote');

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
}));

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.post('/quotes', function(req, res) {
    let quote = new Quote(req.body);
    quote.save(function(err) {
        if (err) {
            for (let key in err.errors) {
                req.flash('quote', err.errors[key].message)
            }
            res.redirect('/');
        } else {
            req.flash('success', 'Your quote was successfully added to the database!');
            res.redirect('/quotes');
        }
    });
});

app.get('/quotes', function(req, res) {
    let quoteArr;
    query = Quote.find({}, function(err, quotes) {
        quoteArr = quotes;
        res.render('result', {quotes: quoteArr});
    });
});


app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});