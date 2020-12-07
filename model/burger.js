// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");


// Callback function for burger variable
var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // Insert function
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", "burger_name", burger_name, function(res) {
      cb(res);
    });
  },
  // Update function
  update: function(colVal, id, cb) {
    orm.updateOne(colVal, id, function(res) {
      cb(res);
    });
  },
  delete: function(id, cb) {
    orm.delete('burgers', id, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;