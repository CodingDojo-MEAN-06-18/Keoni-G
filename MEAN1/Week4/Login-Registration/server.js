const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
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
    Message.find({}).then((messages) => {
        res.render("messages", { title: "Message Board", all_messages: messages });
    }).catch((error) => {
        console.log("Error: ", error);
    });
});

app.post('/users/new', (req, res) => {
    User.create(req.body).then((user) => {
        
        res.redirect("/");
    }).catch((error) => {
        console.log("Error: ", error);
        for (let key in error.errors) {
            req.flash('messages', err.errors[key].message)
        }
        res.redirect("/");
    });
});

app.post('/messages/:id/comments/new', (req, res) => {
    Comment.create(req.body).then((comment) => {
        Message.findById(req.params.id).then((message) => {
            message.comments.push(comment);
            message.save().then(() => {
                res.redirect("/");
            });
        }).catch((error) => {
            console.log("Error: ", error);
        });
    }).catch((error) => {
        console.log("Error: ", error);
        for (let key in error.errors) {
            req.flash('comments', err.errors[key].message)
        }
        res.redirect("/");
    });
});

app.listen(8000, () => {
    console.log("Running in localhost at port 8000");
});