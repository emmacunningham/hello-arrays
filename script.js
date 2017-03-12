// Array of todo objects
var todos = [
  {
    assignedTo: "Emma Cunningham",
    task: "Take out garbage",
    priority: 1,
    dueDate: "Wednesday"
  },
  {
    assignedTo: "Daniela Aramayo",
    task: "Run laundry",
    priority: 2,
    dueDate: "Monday"
  },
  {
    assignedTo: "Hans Vermy",
    task: "Fold laundry",
    priority: 3,
    dueDate: "Thursday"
  },
  {
    assignedTo: "Hans Vermy",
    task: "Run dishwasher",
    priority: 2,
    dueDate: "Friday"
  },
  {
    assignedTo: "Daniela Aramayo",
    task: "Put away dishes",
    priority: 3,
    dueDate: "Tuesday"
  },
  {
    assignedTo: "Emma Cunningham",
    task: "Pay rent",
    priority: 1,
    dueDate: "Friday"
  },
  {
    assignedTo: "Emma Cunningham",
    task: "Grocery shopping",
    priority: 3,
    dueDate: "Wednesday"
  },
  {
    assignedTo: "Emma Cunningham",
    task: "Vacuum living room",
    priority: 1,
    dueDate: "Monday"
  },
  {
    assignedTo: "Hans Vermy",
    task: "Clean bathroom",
    priority: 2,
    dueDate: "Tuesday"
  },
  {
    assignedTo: "Daniela Aramayo",
    task: "Clean refridgerator",
    priority: 3,
    dueDate: "Thursday"
  }
];

$(document).ready(pageReady);

$("#assigned-to").click(function() {
  clearTodos();
  sortByAssignedTo();

  todos.forEach(function(todo, index) {
    addTodoElement(todo);
  });
});

$("#priority").click(function() {
  clearTodos();
  sortByPriority();

  todos.forEach(function(todo, index) {
    addTodoElement(todo);
  });
});

$("#due-date").click(function() {
  clearTodos();
  sortByDueDate();

  todos.forEach(function(todo, index) {
    addTodoElement(todo);
  });

});

function pageReady() {




}

function sortByAssignedTo() {

}

function sortByPriority() {

}

function sortByDueDate() {

}

// Helper function which will clear all of the todos
// This is useful if you need to append NEW results to the page (but don't want the old ones)
function clearTodos() {
  $("#todos-container").empty();
}

// Helper function which will take a todo object, create an HTML element, and add it to the page
function addTodoElement(todo) {
  $("#todos-container").append(makeTodoElement(todo));
}

// Creates and returns a DOM element with a todos's details
function makeTodoElement(todo) {

  var todoContainer = $("<div class='todo-container'></div>");

  // Creates an h2 element with person's name who is assigned the task as the content
  var assignedToElement = $("<h2>Assigned to: "+ todo.assignedTo + "</h2>");

  // Creates an h3 element with todo task as the content
  var taskElement = $("<h3>Task: "+ todo.task + "</h3>");

  // Creates an h3 element with todo's priority as the content
  var priorityElement = $("<h3>Priority: "+ todo.priority + "</h3>");

  // Creates an h3 element with todo's due date as the content
  var dueDateElement = $("<h3>Due: "+ todo.dueDate + "</h3>");


  // Append each of the elements to the #todos-container element
  todoContainer.append(assignedToElement);
  todoContainer.append(taskElement);
  todoContainer.append(priorityElement);
  todoContainer.append(dueDateElement);

  return todoContainer;
}

