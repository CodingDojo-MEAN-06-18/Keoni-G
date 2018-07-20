const Note = require("../models/note.js");
const path = require('path');

module.exports = {
    index: function (req, res, next) {
        res.sendFile(path.resolve("./public/dist/Anonymous-Notes/index.html"));
    },

    postNote: function (req, res, next) {
        Note.create(req.body)
            .then(note => res.json(note))
            .catch(error => {
                const errors = Object.keys(error.errors)
                    .map(key => error.errors[key].message);
                res.json(errors);
            });
    },

    getNotes: function (req, res, next) {
        Note.find({}).sort({ createdAt: -1 })
            .then(notes => {
                res.json(notes);
            })
            .catch(err => {
                for (let key in err.errors) {
                    req.flash('note', err.errors[key].message)
                }
            });
    },
}