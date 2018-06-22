const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2 },
}, { timestamps: true });

mongoose.model('User', UserSchema);

module.exports = mongoose.model("User");