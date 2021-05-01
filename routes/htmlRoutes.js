const path = require('path');


// exports this module to make it available to the rest of the project
module.exports = (app) => {

    // routes the user to the notes htnl page in the public folder
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/notes.html'));
    });

    // routes the user to the index html page in the public folder 
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });

   // routes the user to the index html page in the public folder when there isn't a matching route above
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname,'../public/index.html'));
    });

};
