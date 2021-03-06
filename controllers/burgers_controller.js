var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/insert", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, 0
  ], function(result) {
      res.redirect('/');
  });
});

router.post("/update/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  burger.updateOne(req.params.id, function() {
    res.redirect('/');
  });
});

// Export routes for server.js to use.
module.exports = router;