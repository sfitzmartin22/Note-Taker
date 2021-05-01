const path = require('path');


// exports this module to make it available to the rest of the project
module.exports = (app) => {

    // routes the user to the notes htnl page in the public folder
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });

    // routes the user to the index html page in the public folder when there isn't a matching route above, i could have put the "/" to make it the homepage but given this application having only one other page i figured i'd make this the default so the user doesn't receive page not found errors
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });

};
