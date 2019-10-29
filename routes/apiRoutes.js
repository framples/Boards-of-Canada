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

  // POST route for saving a new employee
  app.post("/api/employee/", function(req, res) {
    console.log(req.body);
    db.Employee.create({
      name: req.body.name,
      level: req.body.level,
      email: req.body.email
    }).then(function(dbEmployee) {
      // We have access to the new todo as an argument inside of the callback function
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

  // POST route for saving a new jobs
  app.post("/api/jobs/", function(req, res) {
    console.log(req.body);
    db.Jobs.create({
      name: req.body.name,
      location: req.body.location,
      tasktype: req.body.tasktype,
      employee_id: req.body.employee_id,
      job_desc: req.body.job_desc
    }).then(function(dbJobs) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(dbJobs);
    });
  });

  // PUT route for updating todos. We can get the updated todo data from req.body
  app.put("/api/jobs/", function(req, res) {
    // Update takes in an object describing the properties we want to update, and
    // we use where to describe which objects we want to update
    db.Todo.update(
      {
        text: req.body.text,
        complete: req.body.complete
      },
      {
        where: {
          id: req.body.id
        }
      }
    ).then(function(dbTodo) {
      res.json(dbTodo);
    });
  });
};
