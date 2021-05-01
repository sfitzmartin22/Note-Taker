const express = require("express");
const path = require("path");
const fs = require("fs");


// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 8080;

// sets up app to handle data parsing

app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);



// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));