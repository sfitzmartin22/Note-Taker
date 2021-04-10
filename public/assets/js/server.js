const exports = require("express");
const path = require("path");

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// sets up app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


