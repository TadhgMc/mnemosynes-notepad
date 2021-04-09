const db = require('../db/db.json');
const Note = require('../lib/Note');

module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(db));

    app.post('/api/notes', (req, res) => {
        let request = req.body;
        let note = new Note(request);
        db.push(note);
        console.log(note);
        res.json(true);
    });

    app.delete('/api/notes/:id', (req, res) =>{
        const specificNote = req.params.id;
        console.log(specificNote);
        for (let i = 0; i < db.length; i++){
            if (specificNote === db[i].id){
                db.splice(i, 1);
                console.log('deleted note!');
                return res.json(true)
            }
        } 
        return console.log("Couldn't find that note");
    });
}