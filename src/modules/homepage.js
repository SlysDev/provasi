import timeManager from "./timemanager.js";
let homePage = (function () {
    let todoManager = (function () {
        let todoList = [];
        let todoCreate = function (title, description, priority, dueDate) {
            let todo = { title, description, priority, dueDate };
            todoList.push(todo);
            return { todo };
        };
    })();
    let pageRender = (function () {
        let mainContentCreate = function () {
            let content = document.querySelector("#content");
            let mainContainer = document.createElement("div");
            mainContainer.id = "main-container";
            if (timeManager.currentTime.partOfDay == "morning") {
                mainContainer.classList.add("morning");
            } else if (timeManager.currentTime.partOfDay == "afternoon") {
                mainContainer.classList.add("afternoon");
            } else {
                mainContainer.classList.add("evening");
            }
            content.appendChild(mainContainer);
        };
        let createTodo = function (title, dueDate, priority) {
            let todoContainer = document.createElement("div");
            let todoTitle = document.createElement("p");
            let todoDueDate = document.createElement("p");
            todoTitle.textContent = title;
            todoDueDate.textContent = dueDate;
        };

        return { domCreate };
    })();
    return { pageRender, todoManager };
})();

document.addEventListener("DOMContentLoaded", function () {
    homePage.pageRender.domCreate();
});

export default homePage;
