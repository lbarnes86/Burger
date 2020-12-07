// Here is the O.R.M. where you write functions that takes inputs and conditions
// and turns them into database commands like SQL.

let connection = require("./connection.js");

let orm = {
  selectAll: function (tableName, cb) {
    var queryString = `SELECT * FROM ${tableName};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  // vals is an array of values that we want to save to cols
  // cols are the columns we want to insert the values into
  insertOne: function (tableName, cols, vals, cb) {
    var queryString = `INSERT INTO ${tableName} (${cols}) VALUES ('${vals}');`;
    //`INSERT INTO burgers (burger_name devoured) VALUES ('blue cheese',false)`
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // objColVals would be the columns and values that you want to update
  // an example of objColVals would be {name: panther, sleepy: true}
  updateOne: function (colVal, id, cb) {
    var queryString = `UPDATE burgers SET devoured='1' WHERE ${colVal}=${id};`;
    connection.query(queryString, [id], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  delete: function (tableName, id, cb) {
    var queryString = `DELETE FROM ${tableName} WHERE id=${id};`;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
};

module.exports = orm;
