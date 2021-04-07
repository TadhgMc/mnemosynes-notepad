const path = require('path');
const db = require('../db/db.json');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        //input code here that adds the post to the data base
        const newNote = req.body;
        db.push(newNote);
        res.json(true);
    })
}