import pageDom from "./pagedom.js";
import projectManager from "./project-manager.js";
let todoManager = (function () {
    let createTodo = function (title, description, priority, dueDate) {
        let todo = {
            title,
            description,
            priority,
            dueDate,
            completed: false,
        };
        if (todo.completed === true) {
            pageDom.todoDom.finishTodo(todo);
        }
        pageDom.todoDom.createTodo(todo);
        projectManager.currentProject.todoList.push(todo);
        console.log(projectManager.currentProject.todoList);
        return { todo };
    };
    let deleteTodo = function (todoItem, todoIndex) {
        delete projectManager.currentProject.todoList[todoIndex];
    };
    let finishTodo = function (todoItem, todoIndex) {
        let selectedTodo = projectManager.currentProject.todoList[todoIndex];
        selectedTodo.completed = true;
        pageDom.todoDom.finishTodo(selectedTodo);
    };
    return { createTodo, deleteTodo, finishTodo };
})();

export default todoManager;
