const uniqid = require('uniqid');

class Note {
    constructor(request){
        this.id = uniqid();
        this.title = request.title;
        this.text = request.text;
    }
}

module.exports = Note;