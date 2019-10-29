$(document).ready(function() {
  // Job input fields
  var $newJobNameInput = $("#jobName");
  var $newJobLocationInput = $("#jobLocation");
  var $newJobTypeInput = $("#jobType");
  var $newJobDetailsInput = $("#jobDetails");
  var $newEmployeeAddInput = $("#employeeAdd");

  // Our new Jobs will go inside the containerTaskList
  var $containerTaskListJobs = $("#containerAllJobs");

  // button click
  $(document).on("click", "#addJobButton", insertJob);

  // Our initial tasktype and jobs array
  var jobs = [];

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
        "<td>" + jobs.id + "</td>",
        "<td>" + jobs.name + "</td>",
        "</td>"
      ].join("")
    );
    return $newInputRow;
  }

  // This function inserts a new employee into our database and then updates the view
  function insertJob(event) {
    event.preventDefault();
    var Job = {
      name: $newJobNameInput.val().trim(),
      location: $newJobLocationInput.val().trim(),
      tasktype: $newJobTypeInput.val().trim(),
      employee_id: $newEmployeeAddInput.val().trim(),
      job_desc: $newJobDetailsInput.val().trim()
    };
    $.post("/api/jobs/", Job, getJobs);
    $newJobNameInput.val("");
    $newJobLocationInput.val("");
    $newEmployeeAddInput.val("");
    $newJobDetailsInput.val("");
    $newJobLocationInput.val("");
  }
});
