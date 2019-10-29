$(document).ready(function() {
  // employee input fields
  var $newEmployeeNameInput = $("#employeeName");
  var $newemployeeLevelInput = $("#employeeLevel");
  var $newemployeeEmailInput = $("#employeeEmail");

  // Getting a reference to the input field where user adds a new task
  var $newTaskNameInput = $("#taskName");
  // Our new taskType will go inside the containerTaskList
  var $containerTaskList = $("#containerTaskList");

  // Our new Jobs will go inside the containerTaskList
  var $containerTaskListJobs = $("#containerAllJobs");

  // Our new employee will go inside the containerTaskList
  var $containerEmployee = $("#containerEmployeeList");

  // button click
  $(document).on("click", "#addTaskButton", insertTask);
  $(document).on("click", "#addEmployeeButton", insertEmployee);

  // Our initial tasktype and jobs array
  var taskType = [];
  var jobs = [];
  var employee = [];

  // Getting tasks from database when page loads
  getTaskType();

  // This function resets the todos displayed with new todos from the database
  function initializeRows() {
    $containerTaskList.empty();
    var rowsToAdd = [];
    for (var i = 0; i < taskType.length; i++) {
      rowsToAdd.push(createNewRow(taskType[i]));
    }
    $containerTaskList.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getTaskType() {
    $.get("/api/taskType", function(data) {
      taskType = data;
      initializeRows();
    });
  }

  // This function constructs a todo-item row
  function createNewRow(taskType) {
    var $newInputRow = $(
      [
        "<tr>",
        "<td>" + taskType.id + "</td>",
        "<td>" + taskType.name + "</td>",
        "</tr>"
      ].join("")
    );
    return $newInputRow;
  }

  // This function inserts a new task into our database and then updates the view
  function insertTask(event) {
    event.preventDefault();
    var taskType = {
      name: $newTaskNameInput.val().trim()
    };
    $.post("/api/taskType", taskType, getTaskType);
    $newTaskNameInput.val("");
  }

  // get jobs and output data
  // Getting tasks from database when page loads
  getJobs();

  // This function resets the todos displayed with new todos from the database
  function initializeRowsJobs() {
    $containerTaskListJobs.empty();
    var rowsToAdd = [];
    for (var i = 0; i < jobs.length; i++) {
      rowsToAdd.push(createNewRowJobs(jobs[i]));
    }
    $containerTaskListJobs.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getJobs() {
    $.get("/api/jobs", function(data) {
      jobs = data;
      initializeRowsJobs();
    });
  }

  // This function constructs a todo-item row
  function createNewRowJobs(jobs) {
    var $newInputRow = $(
      [
        "<tr>",
        "<td>" + jobs.employee_id + "</td>",
        "<td>" + jobs.location + "</td>",
        "<td>" + jobs.job_desc + "</td>",
        "<td>" + jobs.job_status + "</td>",
        "</tr>"
      ].join("")
    );
    return $newInputRow;
  }

  // get employees and output data

  getEmployee();

  // This function resets the todos displayed with new todos from the database
  function initializeRowsEmployee() {
    $containerEmployee.empty();
    var rowsToAdd = [];
    for (var i = 0; i < employee.length; i++) {
      rowsToAdd.push(createNewRowEmployee(employee[i]));
    }
    $containerEmployee.prepend(rowsToAdd);
  }

  // This function grabs todos from the database and updates the view
  function getEmployee() {
    $.get("/api/employee", function(data) {
      employee = data;
      initializeRowsEmployee();
    });
  }

  // This function constructs a todo-item row
  function createNewRowEmployee(employee) {
    var $newInputRow = $(
      [
        "<tr>",
        "<td>" + employee.id + "</td>",
        "<td>" + employee.name + "</td>",
        "</tr>"
      ].join("")
    );
    return $newInputRow;
  }

  // This function inserts a new employee into our database and then updates the view
  function insertEmployee(event) {
    event.preventDefault();
    var employee = {
      name: $newEmployeeNameInput.val().trim(),
      level: parseInt($newemployeeLevelInput.val().trim()),
      email: $newemployeeEmailInput.val().trim()
    };
    $.post("/api/employee", employee, getEmployee);
    $newEmployeeNameInput.val("");
    $newemployeeLevelInput.val("");
    $newemployeeEmailInput.val("");
  }
});
