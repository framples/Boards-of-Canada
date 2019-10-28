$(document).ready(function () {
    // Getting a reference to the input field where user adds a new task
    var $newJobNameInput = $("#jobName");
    // Our new taskType will go inside the containerTaskList
    var $jobLocation = $("#jobLocation");

    // Our new Jobs will go inside the containerTaskList
    var $jobType = $("#jobType");

    // Our new employee will go inside the containerTaskList
    var $jobDetails = $("#jobDetails");
    var $employeeAdd = $("#employeeAdd");
    var $containerTaskListJobs = $("#containerAllJobs");

    // button click
    $(document).on("click", "#addJobButton", addjob());

    function addJob(event) {
        event.preventDefault();
        var job = {
            name: $newJobNameInput.val().trim(),
            location: $jobLocation.val().trim(),
            taskType: $jobType.val(),
            job_desc: $jobDetails.val(),
            employee_id: $employeeAdd.val()
        };
        $.post("/api/jobs", job, getJobs());
        $newTaskNameInput.val("");
   }
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
       console.log(jobs)
       initializeRowsJobs();
     });
   }
 
   // This function constructs a todo-item row
   function createNewRowJobs(jobs) {
     var $newInputRow = $(
       [
         "<li>",
         "<span>",
         "id:" + jobs.id + "    ",
         "task name: " + jobs.name,
         "</span>",
         "<br></br>",
         "</li>"
       ].join("")
     );
     return $newInputRow;
   }
});