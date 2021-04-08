const express = require('express');
const path = require('path');
const db = require('./db/db.json');
// const uniqid = require('uniqid');
const Note = require('./lib/Note')

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('/api/notes', (req, res) => res.json(db));

//dont think this is actually needed
app.get('/api/notes/:id', (req, res) => {
    const specificNote = req.params.id;
    console.log(specificNote);
    for (let i = 0; i < db.length; i++){
        if (specificNote === db[i].id){
            return res.json(db[i]);
        }
    } 
    return console.log("Couldn't find that note")
})


app.post('/api/notes', (req, res) => {
    let request = req.body;
    let note = new Note(request);
    db.push(note);
    res.json(true);
});

app.delete('/api/notes', (req, res) =>{
    
})


app.listen(PORT, () => {
    console.log(`app listening on PORT: ${PORT}`);
});