const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
mongoose.connect('mongodb://localhost/cuttlefish');
const app = express();

var CuttlefishSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    color: { type: String, required: true, minlength: 2 },
    food: { type: String, required: true, minlength: 2 },
    birthday: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Cuttlefish', CuttlefishSchema);

var Cuttlefish = mongoose.model('Cuttlefish');

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
    // Display all cuttlefish
    let cuttlefishArr;
    Cuttlefish.find({}, function(err, cuttlefish) {
        cuttlefishArr = cuttlefish;
        res.render('index', {cuttlefish: cuttlefishArr});
    });
});

app.get('/cuttlefish/new', function(req, res) {
    // Displays form for a new cuttlefish
    res.render('new');
});

app.get('/cuttlefish/:id', function(req, res) {
    Cuttlefish.findById(req.params.id, function(err, cuttlefish) {
        res.render('cuttlefish', {cuttlefish: cuttlefish});
    });
});

app.get('/cuttlefish/edit/:id', function(req, res) {
    // Displays form to edit a cuttlefish
    Cuttlefish.findById(req.params.id, function(err, cuttlefish) {
        res.render('edit', {cuttlefish: cuttlefish});
    });
});

app.post('/cuttlefish', function(req, res) {
    // Action attribute for /cuttlefish/new
    let cuttlefish = new Cuttlefish(req.body);
    cuttlefish.save(function(err) {
        if (err) {
            for (let key in err.errors) {
                req.flash('cuttlefish', err.errors[key].message)
            }
            res.redirect('/cuttlefish/new');
        } else {
            req.flash('success', 'Your cuttlefish was successfully added to the database!');
            res.redirect('/');
        }
    });
});

app.post('/cuttlefish/:id', function(req, res) {
    // Action attribute for /cuttlefish/edit/:id
    Cuttlefish.findByIdAndUpdate(req.params.id, req.body, function(err, cuttlefish) {
        if (err) {
            for (let key in err.errors) {
                req.flash('cuttlefish', err.errors[key].message)
            }
            res.redirect('/cuttlefish/edit/' + req.params.id);
        } else {
            req.flash('success', 'Your cuttlefish was successfully added to the database!');
            res.redirect('/cuttlefish/' + req.params.id);
        }
    });
});

app.post('/cuttlefish/destroy/:id', function(req, res) {
    // Delete cuttlefish
    Cuttlefish.findByIdAndRemove(req.params.id, function(err, cuttlefish) {
        console.log("Entry deleted successfully");
        res.redirect('/')
    });
});

app.listen(8000, function() {
    console.log("Running in localhost at port 8000");
});