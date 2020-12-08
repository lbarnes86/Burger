
// Import routes and give the server access to them.
let routes = require("./controller/burgers_controller");
// Set Handlebars.
let exhbs = require("express-handlebars");
let express = require("express");
// let connection = require("./config/connection");
let bodyParser = require("body-parser");
let PORT = process.env.PORT || 8080;

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

app.engine("handlebars", exhbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});