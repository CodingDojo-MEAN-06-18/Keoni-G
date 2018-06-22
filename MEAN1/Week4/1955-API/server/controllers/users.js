const User = require("../models/user.js");

module.exports = {
    get_all: (req, res) => {
        User.find({})
        .then( users => {
            res.json(users);
        })
        .catch( error => {
            console.log("Get All Error: ", error);
            res.json(error);
        });
    },
    
    get_one: (req, res) => {
        User.findOne({ name: req.params.name })
        .then( user => {
            res.json(user);
        })
        .catch( error => {
            console.log("Get One Error: ", error);
            res.json(error);
        });
    },

    add_one: (req, res) => {
        User.create({ name: req.params.name })
        .then( user => {
            res.redirect('/' + user.name);
        })
        .catch( error => {
            console.log("Add One Error: ", error);
            res.json(error);
        });
    },

    remove_one: (req, res) => {
        User.deleteOne({ name: req.params.name })
        .then( user => {
            res.redirect('/');
        })
        .catch( error => {
            console.log("Remove One Error: ", error);
            res.json(error);
        });
    },

}