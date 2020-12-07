let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: 8080,
    user: "root",
    password: "rootroot",
    database: "burgers_db",
});
// Connection 
