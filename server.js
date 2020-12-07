let express = require("express");
let connection = require("./config/connection");
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8090;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));