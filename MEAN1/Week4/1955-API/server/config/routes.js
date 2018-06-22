const users = require('../controllers/users.js')

module.exports = function(app){
    app.get('/', function(req, res) {
        users.get_all(req, res);
    });

    app.get('/:name', function(req, res) {
        users.get_one(req, res);
    });
    
    app.get('/new/:name', function(req, res) {
        users.add_one(req, res);
    });
    
    app.get('/remove/:name', function(req, res) {
        users.remove_one(req, res);
    });
    
} 