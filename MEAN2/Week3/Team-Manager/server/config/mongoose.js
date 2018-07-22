const mongoose = require('mongoose'),
    path = require('path'),
    reg = new RegExp('\\.js$', 'i'),
    fs = require("fs"),
    modelsPath = path.resolve('server/models');
mongoose.connect('mongodb://localhost:27017/player_manager', { useNewUrlParser: true }).catch((err) => {console.log(err)});

fs.readdirSync(modelsPath).forEach(file => {
    if (reg.test(file)){
        require(path.join(modelsPath, file));
    }
})