// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
//selects all burgers from database
var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  //function so you can "add" a burger
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  //update changes state of burger from "there for the taking" to "devoured."
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;
