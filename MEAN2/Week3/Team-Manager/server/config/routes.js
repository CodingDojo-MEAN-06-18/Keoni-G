const players = require('../controllers/players.js');

module.exports = (app) => {
    app.post('/api/players', (req, res, next) => {
        players.addPlayer(req, res, next);
    });

    app.delete('/api/players', (req, res, next) => {
        players.deletePlayer(req, res, next);
    });
    
    app.get('/api/players', (req, res, next) => {
        players.getPlayers(req, res, next);
    });

    app.put('/api/players', (req, res, next) => {
        players.updateStatus(req, res, next);
    });
    
    app.all("*", (req, res, next) => {
        players.index(req, res, next);
    });
}