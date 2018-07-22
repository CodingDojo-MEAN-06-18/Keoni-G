const mongoose = require('mongoose')

const PlayerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
    preferredPosition: { type: String, required: true, minlength: 2 },
    status: { type: [Number], default: [0, 0, 0] },
}, { timestamps: true });

mongoose.model('Player', PlayerSchema);

module.exports = mongoose.model("Player");