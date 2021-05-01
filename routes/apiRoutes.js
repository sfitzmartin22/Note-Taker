const fs = require('fs');
storedNotes = require('../db/db.json');
const { nanoid } = require('nanoid')

// exports this module to make it available to the rest of the project
module.exports = (app) => {

// gets the current notes in the db.json file 
app.get('/api/notes', (req, res) => res.json(storedNotes));  

// posts the added note to the db.json file with a unique ID for each note using the nanoid npm package and then returns the new updated note list to the page.
app.post('/api/notes', (req, res) => {
    req.body.id = nanoid();
    storedNotes.push(req.body);
    res.json(storedNotes); 
});
}
 