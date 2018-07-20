const notes = require('../controllers/notes.js');

module.exports = (app) => {
    app.post('/notes', (req, res, next) => {
        notes.postNote(req, res, next);
    });
    
    app.get('/notes', (req, res, next) => {
        notes.getNotes(req, res, next);
    });
    
    app.all("*", (req, res, next) => {
        notes.index(req, res, next);
    });
}