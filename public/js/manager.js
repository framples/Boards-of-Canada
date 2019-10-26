$(document).ready(function() {
  // Getting a reference to the input field where user adds a new task
  var $newTaskNameInput = $("#taskName");
  // Our new todos will go inside the containerTaskList
  var $containerTaskList = $("#containerTaskList");
  // button click
  $(document).on("click", "addTaskButton", insertTodo);

  // Our initial todos array
  var taskType = [];

  // Getting todos from database when page loads
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
        "<li class='list-group-item todo-item'>",
        "<span>",
        taskType.text,
        "</span>",
        "<input type='text' class='edit' style='display: none;'>",
        "<button class='delete btn btn-danger'>x</button>",
        "<button class='complete btn btn-primary'>✓</button>",
        "</li>"
      ].join("")
    );
    return $newInputRow;
  }

  // This function inserts a new todo into our database and then updates the view
  function insertTodo(event) {
    event.preventDefault();
    var taskType = {
      name: $newTaskNameInput.val().trim()
    };

    $.post("/api/taskType", taskType, getTaskType);
    $newTaskNameInput.val("");
  }
});
