const exports = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// sets up app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));