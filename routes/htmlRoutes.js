var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {});

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Load manager page
  app.get("/manager", function(req, res) {
    res.render("manager");
  });

  // Load worker page
  app.get("/worker", function(req, res) {
    res.render("worker");
  });

  app.get("/supervisor", function(req, res) {
    res.render("supervisor");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
