// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

let connection = require("./connection.js");

let orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName};`;
        connection.query(queryString, function(err, result) {
          if (err) {
            throw err;
          }
          cb(result);
        });
},

}