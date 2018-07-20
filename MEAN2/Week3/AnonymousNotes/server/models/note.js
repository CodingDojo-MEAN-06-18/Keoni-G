const mongoose = require('mongoose')

const NoteSchema = new mongoose.Schema({
    note: { type: String, required: true, minlength: 2 },
    date: { type: Date, default: Date.now }
}, { timestamps: true });

mongoose.model('Note', NoteSchema);

module.exports = mongoose.model("Note");