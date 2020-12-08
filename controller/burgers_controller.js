var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(burgers) {
    var hbsObject = {
      burgers: burgers
    };

    //console.log(hbsObject);
    // res.send(burgers);
    res.render("index", hbsObject);
  });
});

router.post("/insertOne", function(req, res) {
    console.log(req.body);
   // {burger_name: 'blue cheese'}
  burger.insertOne(req.body.burger_name, function(addon) {
    // Send back the ID of the new quote
    res.redirect("/");
  });
});

//POST REQUEST - updating if burger has been devoured or not
router.post("/updateOne/:id", function(req, res) {
  // var condition = "id = " + req.params.id;
  var colVal = "id";

  var id = req.params.id;
  burger.update(colVal, id, function()
    {
      res.redirect("/");
    });
    }
  );

  router.get("/deleteOne/:id", function(req, res) {
    console.log('we hit the delete route!!', req.params);

    var condition = "id = " + req.params.id;
    var colVal = "id";
  
    var id = req.params.id;
    burger.delete(id, function()
      {
        res.redirect("/");
      });
       });


// Export routes for server.js to use.
module.exports = router;