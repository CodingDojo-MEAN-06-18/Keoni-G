const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const bcrypt = require('bcrypt-as-promised');
mongoose.connect('mongodb://localhost/messageboard');
const app = express();

const UserSchema = new mongoose.Schema({
    email: { type: String, required: true, minlength: 2 },
    password: { type: String, required: true, minlength: 7 },
    first_name: { type: String, required: true, minlength: 2 },
    last_name: { type: String, required: true, minlength: 2 },
    birthday: { type: Date, required: true },
}, { timestamps: true });


mongoose.model('User', UserSchema);

const User = mongoose.model('User');

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

app.get('/', (req, res) => {
    if (req.session.userID){
        res.redirect("/users");
    } else {
        res.render("index");
    }
});

app.get('/users', (req, res) => {
    if (req.session.userID){
        User.findById(req.session.userID).then( user => {
            res.render("users", { user: user });
        }).catch( error => {
            console.log("Error: ", error);
            res.redirect('/');
        });
    } else {
        res.redirect("/");
    }
});

app.post('/users/new', (req, res) => {
    User.findOne({ email: req.body.email }).then( found_user => {
        if (found_user) {
            req.flash('newUser', "A user with that email already exists!");
            res.redirect('/');
        }
    }).catch( error => {
        console.log(error);
        req.flash('newUser', "A user with that email already exists!");
        res.redirect('/');
    });
    bcrypt.hash(req.body.password, 10).then( hashed_password => {
        req.body.password = hashed_password;
        User.create(req.body).then( user => {
            req.session.userID = user.id;
            res.redirect("/users");
        }).catch( error => {
            console.log("Error: ", error);
            for (let key in error.errors) {
                req.flash('newUser', error.errors[key].message);
            }
            res.redirect("/");
        });
    }).catch( error => {
        console.log("Error: ", error);
    });
});

app.post('/login', (req, res) => {
    User.findOne({ email: req.body.email }).then( user => {
        if (!user) {
            req.flash('login', "That email does not match any entry in our database.");
            res.redirect('/');
        }
        bcrypt.compare(req.body.password, user.password).then( result => {
            if (result) {
                req.session.userID = user.id;
                res.redirect("/users");
            } else {
                req.flash('login', "That password does not match the one in our database.");
                res.redirect("/");
            }
        }).catch( error => {
            console.log("Error: ", error);
            req.flash('login', "That password does not match the one in our database.");
            res.redirect("/");
        });
    }).catch((error) => {
        console.log("Error: ", error);
        for (let key in error.errors) {
            req.flash('login', error.errors[key].message)
        }
        res.redirect("/");
    });
});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

app.listen(8000, () => {
    console.log("Running in localhost at port 8000");
});