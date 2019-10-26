var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.json(dbExample);
    });
  });

  // GET route for getting all of the Jobs
  app.get("/api/jobs", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Jobs.findAll({}).then(function(dbJobs) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbJobs);
    });
  });

  // GET route for getting all of the taskstypes
  app.get("/api/taskType", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Tasktype.findAll({}).then(function(dbTaskType) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbTaskType);
    });
  });

  // GET route for getting all of the Employee
  app.get("/api/employee", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Employee.findAll({}).then(function(dbEmployee) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbEmployee);
    });
  });

  // POST route for saving a new todo
  app.post("/api/taskType/", function(req, res) {
    console.log(req.body);
    db.Tasktype.create({
      name: req.body.name
    }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbTodo);
    });
  });
};
