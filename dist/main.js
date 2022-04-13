/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/pagedom.js":
/*!********************************!*\
  !*** ./src/modules/pagedom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/project-manager.js */ "./src/modules/project-manager.js");
/* harmony import */ var _todo_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-manager.js */ "./src/modules/todo-manager.js");


let pageDom = (function () {
    let content = document.querySelector("#content");
    let mainContainer = document.createElement("div");
    mainContainer.id = "main-container";
    mainContainer.textContent = "";
    content.appendChild(mainContainer);

    let projectMenuDom = function () {
        let homeTitle = document.createElement("h1");
        if (_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.length == 0) {
            homeTitle.textContent = "Let's start with a project";
        } else {
            homeTitle.textContent = "Choose a project:";
        }
        let projectCreateContainer = document.createElement("div");
        projectCreateContainer.classList.add("project-create-container");
        let projectCreateButton = document.createElement("button");
        projectCreateButton.classList.add("project-create-button");
        projectCreateButton.textContent = "Create a project";
        let projectCreateInput = document.createElement("input");
        projectCreateInput.setAttribute("type", "text");
        projectCreateInput.classList.add("invisible");
        projectCreateButton.addEventListener("click", function () {
            projectCreateInput.classList.remove("invisible");
            projectCreateButton.classList.add("invisible");
            projectCreateInput.focus();
        });
        projectCreateContainer.append(projectCreateInput, projectCreateButton);
        projectCreateInput.addEventListener("focusin", function () {
            document.addEventListener("keydown", function (key) {
                if (key.code === "Enter") {
                    _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].createProject(projectCreateInput.value);
                    projectCreateInput.value = "";
                }
            });
        });
        projectCreateInput.addEventListener("focusout", function () {
            projectCreateInput.classList.add("invisible");
            projectCreateButton.classList.remove("invisible");
        });
        pageDom.projectDom.projectListRender();
        mainContainer.prepend(projectCreateContainer);
        mainContainer.prepend(homeTitle);
    };
    let clearPage = function () {
        mainContainer.textContent = "";
    };
    let todoDom = (function () {
        let todoListContainer = document.createElement("div");
        todoListContainer.classList.add("todo-list-container");
        let expandTodo = function (todo) {
            clearPage();
            let todoExpandedContainer = document.createElement("div");
            todoExpandedContainer.classList.add("todo-expanded-container");
            let todoExpandedTitle = document.createElement("h1");
            console.log(todo.title);
            todoExpandedTitle.textContent = todo.title;
            let todoInfoContainer = document.createElement("div");
            todoInfoContainer.classList.add("todo-info-container");
            let todoProjectInfo = document.createElement("p");
            console.log(_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject);
            todoProjectInfo.textContent = _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.title;
            let todoDateInfo = document.createElement("p");
            todoDateInfo.textContent = todo.dueDate;
            let todoPriorityInfo = document.createElement("p");
            todoPriorityInfo.textContent = todo.priority;
            todoInfoContainer.append(
                todoProjectInfo,
                todoDateInfo,
                todoPriorityInfo
            );
            mainContainer.append(todoInfoContainer);
        };
        let createTodo = function (todo) {
            let todoContainer = document.createElement("div");
            todoContainer.classList.add("todo-container");
            let todoTitle = document.createElement("p");
            todoTitle.textContent = `${todo.title}`;
            let leftButtonsContainer = document.createElement("div");
            leftButtonsContainer.classList.add("todo-button-container");
            let rightButtonsContainer = document.createElement("div");
            rightButtonsContainer.classList.add("todo-button-container");
            let checkButton = document.createElement("button");
            checkButton.classList.add("todo-check-btn");
            checkButton.classList.add("icon-btn");
            checkButton.addEventListener("click", function () {
                _todo_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].finishTodo(
                    todo,
                    _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.todoList.indexOf(todo)
                );
            });
            let deleteButton = document.createElement("button");
            deleteButton.addEventListener("click", function () {
                _todo_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodo(
                    todo,
                    _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.todoList.indexOf(todo)
                );
                todoListContainer.textContent = "";
                loadTodos(_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject);
            });
            deleteButton.classList.add("delete-btn");
            deleteButton.classList.add("icon-btn");
            let dateButton = document.createElement("button");
            dateButton.classList.add("icon-btn");
            let dateInput = document.createElement("input");
            dateInput.setAttribute("type", "date");
            dateButton.addEventListener("click", function () {
                dateButton.classList.add("invisible");
            });
            let expandButton = document.createElement("button");
            expandButton.classList.add("icon-btn");
            let checkIcon = document.createElement("img");
            checkIcon.setAttribute("src", "../assets/incomplete-icon.svg");
            let dateIcon = document.createElement("img");
            dateIcon.setAttribute("src", "../assets/date-icon.svg");
            let deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "../assets/trash-icon.svg");
            let expandIcon = document.createElement("img");
            expandIcon.setAttribute("src", "../assets/expand-icon.svg");
            deleteButton.append(deleteIcon);
            checkButton.append(checkIcon);
            dateButton.append(dateIcon);
            expandButton.append(expandIcon);
            leftButtonsContainer.append(checkButton);
            rightButtonsContainer.append(
                dateButton,
                expandButton,
                deleteButton
            );
            todoContainer.append(
                leftButtonsContainer,
                todoTitle,
                rightButtonsContainer
            );
            expandButton.addEventListener("click", function () {
                console.log(_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject);
                expandTodo(todo);
            });
            todo.dom = todoContainer;
            console.log(todo.dom);
            todoListContainer.appendChild(todoContainer);
        };
        let finishTodo = function (todo) {
            todo.dom.classList.add("completed-todo");
            let checkButton = todo.dom.querySelector(".todo-check-button");
            let checkIcon = checkButton.querySelector("img");
            checkIcon.setAttribute("src", "../assets/completed-icon.svg");
        };
        let loadTodos = function (project) {
            todoListContainer.textContent = "";
            project.todoList.forEach((todo) => {
                createTodo(todo);
                if (todo.completed === true) {
                    _todo_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].finishTodo(
                        todo,
                        _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.todoList.indexOf(todo)
                    );
                } else {
                    return;
                }
            });
        };
        return {
            createTodo,
            todoListContainer,
            loadTodos,
            finishTodo,
            expandTodo,
        };
    })();
    let projectDom = (function () {
        let projectListContainer = document.createElement("div");
        projectListContainer.classList.add("project-list");
        let projectListRender = function () {
            projectListContainer.textContent = "";
            _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectList.forEach(function (project) {
                projectDom.createProject(project);
            });
            mainContainer.appendChild(projectListContainer);
        };
        let createProject = function (project) {
            let projectContainer = document.createElement("div");
            projectContainer.classList.add("project-container");
            let projectTitle = document.createElement("p");
            projectTitle.textContent = project.title;
            projectContainer.append(projectTitle);
            projectContainer.addEventListener("click", function () {
                _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].openProject(project);
            });
            projectListContainer.append(projectContainer);
        };
        let loadProject = function (project) {
            let navBar = document.createElement("div");
            navBar.classList.add("nav-bar");
            let projectTitleText = document.createElement("h1");
            projectTitleText.textContent = `${project.title}`;
            let returnToHomeButton = document.createElement("button");
            returnToHomeButton.textContent = "< Return Home";
            returnToHomeButton.classList.add("icon-btn");
            returnToHomeButton.addEventListener("click", function () {
                clearPage();
                projectMenuDom();
            });
            let deleteProjectButton = document.createElement("button");
            let deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "../assets/trash-icon.svg");
            deleteProjectButton.classList.add("icon-btn");
            deleteProjectButton.classList.add("delete-btn");
            deleteProjectButton.append(deleteIcon);
            deleteProjectButton.addEventListener("click", function () {
                _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].deleteProject(
                    _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.title
                );
            });
            let todoCreateContainer = document.createElement("div");
            todoCreateContainer.classList.add("todo-create-container");
            let todoCreateInput = document.createElement("input");
            todoCreateInput.setAttribute("type", "text");
            todoCreateInput.classList.add("invisible");
            let todoCreateButton = document.createElement("button");
            let plusIcon = document.createElement("img");
            plusIcon.setAttribute("src", "../assets/plus-icon.svg");
            todoCreateButton.appendChild(plusIcon);
            todoCreateButton.addEventListener("click", function () {
                todoCreateInput.classList.remove("invisible");
                todoCreateButton.classList.add("invisible");
                todoCreateInput.focus();
            });
            todoCreateInput.addEventListener("focusin", function () {
                document.addEventListener("keydown", function (key) {
                    if (key.code === "Enter") {
                        _todo_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].createTodo(todoCreateInput.value);
                        todoCreateInput.value = "";
                    }
                });
            });
            todoCreateInput.addEventListener("focusout", function () {
                todoCreateInput.classList.add("invisible");
                todoCreateButton.classList.remove("invisible");
            });
            todoCreateContainer.append(todoCreateInput, todoCreateButton);
            todoDom.loadTodos(_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject);
            navBar.append(
                returnToHomeButton,
                projectTitleText,
                deleteProjectButton
            );
            mainContainer.append(
                navBar,
                todoCreateContainer,
                todoDom.todoListContainer
            );
        };
        return { projectListRender, createProject, loadProject };
    })();

    return { projectMenuDom, projectDom, todoDom, clearPage };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pageDom);


/***/ }),

/***/ "./src/modules/project-manager.js":
/*!****************************************!*\
  !*** ./src/modules/project-manager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/pagedom.js */ "./src/modules/pagedom.js");

let projectManager = (function () {
    let currentProject = { title: "Test Project", todoList: [] };
    let projectList = [currentProject];
    let createProject = function (title) {
        let project = { title, todoList: [] };
        projectList.push(project);
        console.log(projectList);
        _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectDom.projectListRender();
    };
    let openProject = function (project) {
        _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearPage();
        currentProject = project;
        _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectDom.loadProject(project);
    };
    let deleteProject = function (projectName) {
        if (projectList.length === 1) {
            delete projectList[0];
        } else {
            delete projectList[projectList.indexOf(currentProject)];
        }
        console.log(projectList);
        _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].clearPage();
        _modules_pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].projectMenuDom();
    };
    return {
        createProject,
        projectList,
        openProject,
        currentProject,
        deleteProject,
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectManager);


/***/ }),

/***/ "./src/modules/todo-manager.js":
/*!*************************************!*\
  !*** ./src/modules/todo-manager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _pagedom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagedom.js */ "./src/modules/pagedom.js");
/* harmony import */ var _project_manager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-manager.js */ "./src/modules/project-manager.js");


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
            _pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].todoDom.finishTodo(todo);
        }
        _pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].todoDom.createTodo(todo);
        _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList.push(todo);
        console.log(_project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList);
        return { todo };
    };
    let deleteTodo = function (todoItem, todoIndex) {
        delete _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList[todoIndex];
    };
    let finishTodo = function (todoItem, todoIndex) {
        let selectedTodo = _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList[todoIndex];
        selectedTodo.completed = true;
        _pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].todoDom.finishTodo(selectedTodo);
    };
    return { createTodo, deleteTodo, finishTodo };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todoManager);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/project-manager.js */ "./src/modules/project-manager.js");

document.addEventListener("DOMContentLoaded", function () {
    _modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].openProject({ title: "Test Project" });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9kby1tYW5hZ2VyLmpzXCI7XG5sZXQgcGFnZURvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gICAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgIGxldCBwcm9qZWN0TWVudURvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaWYgKHByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSBcIkxldCdzIHN0YXJ0IHdpdGggYSBwcm9qZWN0XCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBob21lVGl0bGUudGV4dENvbnRlbnQgPSBcIkNob29zZSBhIHByb2plY3Q6XCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyZWF0ZS1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBwcm9qZWN0Q3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jcmVhdGUtYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBwcm9qZWN0XCI7XG4gICAgICAgIGxldCBwcm9qZWN0Q3JlYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q3JlYXRlSW5wdXQsIHByb2plY3RDcmVhdGVCdXR0b24pO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QocHJvamVjdENyZWF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBwYWdlRG9tLnByb2plY3REb20ucHJvamVjdExpc3RSZW5kZXIoKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5wcmVwZW5kKHByb2plY3RDcmVhdGVDb250YWluZXIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQoaG9tZVRpdGxlKTtcbiAgICB9O1xuICAgIGxldCBjbGVhclBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH07XG4gICAgbGV0IHRvZG9Eb20gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IGV4cGFuZFRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICBsZXQgdG9kb0V4cGFuZGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1leHBhbmRlZC1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0V4cGFuZGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlZFRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIGxldCB0b2RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvUHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0SW5mby50ZXh0Q29udGVudCA9IHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgbGV0IHRvZG9EYXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb0RhdGVJbmZvLnRleHRDb250ZW50ID0gdG9kby5kdWVEYXRlO1xuICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eUluZm8udGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0SW5mbyxcbiAgICAgICAgICAgICAgICB0b2RvRGF0ZUluZm8sXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5mb1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9JbmZvQ29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gICAgICAgICAgICBsZXQgbGVmdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCByaWdodEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2stYnRuXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5maW5pc2hUb2RvKFxuICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKFxuICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbG9hZFRvZG9zKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGxldCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgY2hlY2tJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9pbmNvbXBsZXRlLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRhdGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9kYXRlLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvdHJhc2gtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBsZXQgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBleHBhbmRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9leHBhbmQtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZUljb24pO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uYXBwZW5kKGNoZWNrSWNvbik7XG4gICAgICAgICAgICBkYXRlQnV0dG9uLmFwcGVuZChkYXRlSWNvbik7XG4gICAgICAgICAgICBleHBhbmRCdXR0b24uYXBwZW5kKGV4cGFuZEljb24pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBleHBhbmRCdXR0b24sXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLFxuICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBleHBhbmRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvLmRvbSA9IHRvZG9Db250YWluZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmRvbSk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZpbmlzaFRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgdG9kby5kb20uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZC10b2RvXCIpO1xuICAgICAgICAgICAgbGV0IGNoZWNrQnV0dG9uID0gdG9kby5kb20ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0ljb24gPSBjaGVja0J1dHRvbi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgICAgICAgY2hlY2tJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9jb21wbGV0ZWQtaWNvbi5zdmdcIik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBsb2FkVG9kb3MgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgcHJvamVjdC50b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuZmluaXNoVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLFxuICAgICAgICAgICAgbG9hZFRvZG9zLFxuICAgICAgICAgICAgZmluaXNoVG9kbyxcbiAgICAgICAgICAgIGV4cGFuZFRvZG8sXG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICBsZXQgcHJvamVjdERvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RG9tLmNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RDb250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBsb2FkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICAgICAgICAgIGxldCByZXR1cm5Ub0hvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLnRleHRDb250ZW50ID0gXCI8IFJldHVybiBIb21lXCI7XG4gICAgICAgICAgICByZXR1cm5Ub0hvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbnVEb20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvdHJhc2gtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFwcGVuZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50aXRsZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY3JlYXRlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvcGx1cy1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5jcmVhdGVUb2RvKHRvZG9DcmVhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lci5hcHBlbmQodG9kb0NyZWF0ZUlucHV0LCB0b2RvQ3JlYXRlQnV0dG9uKTtcbiAgICAgICAgICAgIHRvZG9Eb20ubG9hZFRvZG9zKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIG5hdkJhci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLFxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZVRleHQsXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIG5hdkJhcixcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRvZG9Eb20udG9kb0xpc3RDb250YWluZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHByb2plY3RMaXN0UmVuZGVyLCBjcmVhdGVQcm9qZWN0LCBsb2FkUHJvamVjdCB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBwcm9qZWN0TWVudURvbSwgcHJvamVjdERvbSwgdG9kb0RvbSwgY2xlYXJQYWdlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlRG9tO1xuIiwiaW1wb3J0IHBhZ2VEb20gZnJvbSBcIi4uL21vZHVsZXMvcGFnZWRvbS5qc1wiO1xubGV0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSB7IHRpdGxlOiBcIlRlc3QgUHJvamVjdFwiLCB0b2RvTGlzdDogW10gfTtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbY3VycmVudFByb2plY3RdO1xuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0geyB0aXRsZSwgdG9kb0xpc3Q6IFtdIH07XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgICAgcGFnZURvbS5wcm9qZWN0RG9tLnByb2plY3RMaXN0UmVuZGVyKCk7XG4gICAgfTtcbiAgICBsZXQgb3BlblByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICBwYWdlRG9tLmNsZWFyUGFnZSgpO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHBhZ2VEb20ucHJvamVjdERvbS5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9O1xuICAgIGxldCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0TGlzdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgICAgICBwYWdlRG9tLmNsZWFyUGFnZSgpO1xuICAgICAgICBwYWdlRG9tLnByb2plY3RNZW51RG9tKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgb3BlblByb2plY3QsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjtcbiIsImltcG9ydCBwYWdlRG9tIGZyb20gXCIuL3BhZ2Vkb20uanNcIjtcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmxldCB0b2RvTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICBsZXQgdG9kbyA9IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VEb20udG9kb0RvbS5maW5pc2hUb2RvKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIHBhZ2VEb20udG9kb0RvbS5jcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdCk7XG4gICAgICAgIHJldHVybiB7IHRvZG8gfTtcbiAgICB9O1xuICAgIGxldCBkZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JdGVtLCB0b2RvSW5kZXgpIHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0W3RvZG9JbmRleF07XG4gICAgfTtcbiAgICBsZXQgZmluaXNoVG9kbyA9IGZ1bmN0aW9uICh0b2RvSXRlbSwgdG9kb0luZGV4KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdO1xuICAgICAgICBzZWxlY3RlZFRvZG8uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcGFnZURvbS50b2RvRG9tLmZpbmlzaFRvZG8oc2VsZWN0ZWRUb2RvKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGZpbmlzaFRvZG8gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9NYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0TWFuYWdlci5vcGVuUHJvamVjdCh7IHRpdGxlOiBcIlRlc3QgUHJvamVjdFwiIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=