import { compareAsc } from "date-fns";
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
        if (todo.dueDate === undefined) {
            todo.dueDate = new Date().toLocaleDateString();
        }
        projectManager.currentProject.todoList.push(todo);
        sortByDate();
        pageDom.todoDom.createTodo(todo);
        console.log(projectManager.currentProject.todoList);
        return { todo };
    };
    let deleteTodo = function (todoItem, todoIndex) {
        delete projectManager.currentProject.todoList[todoIndex];
        sortByDate();
    };
    let finishTodo = function (todoItem, todoIndex) {
        let selectedTodo = projectManager.currentProject.todoList[todoIndex];
        selectedTodo.completed = true;
        pageDom.todoDom.finishTodo(selectedTodo);
        sortByDate();
    };
    let sortByDate = function () {
        projectManager.currentProject.todoList.sort(compareAsc);
    };
    return { createTodo, deleteTodo, finishTodo };
})();

export default todoManager;
