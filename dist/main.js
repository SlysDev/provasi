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
    let currentProject = { todoList: [] };
    let projectList = [
        {
            title: "Test Project",
            todoList: [],
        },
    ];
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
        delete projectList[projectList.indexOf(currentProject)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bW9kdWxlcy9wYWdlZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi4vbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmltcG9ydCB0b2RvTWFuYWdlciBmcm9tIFwiLi90b2RvLW1hbmFnZXIuanNcIjtcbmxldCBwYWdlRG9tID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgICBtYWluQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuXG4gICAgbGV0IHByb2plY3RNZW51RG9tID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgaG9tZVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICBpZiAocHJvamVjdE1hbmFnZXIucHJvamVjdExpc3QubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiTGV0J3Mgc3RhcnQgd2l0aCBhIHByb2plY3RcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgcHJvamVjdDpcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcHJvamVjdENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3JlYXRlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyZWF0ZS1idXR0b25cIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIHByb2plY3RcIjtcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RDcmVhdGVDb250YWluZXIuYXBwZW5kKHByb2plY3RDcmVhdGVJbnB1dCwgcHJvamVjdENyZWF0ZUJ1dHRvbik7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChwcm9qZWN0Q3JlYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhZ2VEb20ucHJvamVjdERvbS5wcm9qZWN0TGlzdFJlbmRlcigpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQocHJvamVjdENyZWF0ZUNvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIucHJlcGVuZChob21lVGl0bGUpO1xuICAgIH07XG4gICAgbGV0IGNsZWFyUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfTtcbiAgICBsZXQgdG9kb0RvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgZXhwYW5kVG9kbyA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgICAgIGxldCB0b2RvRXhwYW5kZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb0V4cGFuZGVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWV4cGFuZGVkLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvRXhwYW5kZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgdG9kb0V4cGFuZGVkVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbGV0IHRvZG9JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWluZm8tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG9Qcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb1Byb2plY3RJbmZvLnRleHRDb250ZW50ID0gcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBsZXQgdG9kb0RhdGVJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0b2RvRGF0ZUluZm8udGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG4gICAgICAgICAgICBsZXQgdG9kb1ByaW9yaXR5SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5mby50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICB0b2RvSW5mb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgdG9kb1Byb2plY3RJbmZvLFxuICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5mbyxcbiAgICAgICAgICAgICAgICB0b2RvUHJpb3JpdHlJbmZvXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmQodG9kb0luZm9Db250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICBsZXQgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IGAke3RvZG8udGl0bGV9YDtcbiAgICAgICAgICAgIGxldCBsZWZ0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IHJpZ2h0QnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1jaGVjay1idG5cIik7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9NYW5hZ2VyLmZpbmlzaFRvZG8oXG4gICAgICAgICAgICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0LmluZGV4T2YodG9kbylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9NYW5hZ2VyLmRlbGV0ZVRvZG8oXG4gICAgICAgICAgICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0LmluZGV4T2YodG9kbylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsb2FkVG9kb3MocHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBsZXQgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgICAgICAgICAgZGF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGV4cGFuZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBleHBhbmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgbGV0IGNoZWNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBjaGVja0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL2luY29tcGxldGUtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBsZXQgZGF0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZGF0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL2RhdGUtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBsZXQgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBkZWxldGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy90cmFzaC1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIGxldCBleHBhbmRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGV4cGFuZEljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL2V4cGFuZC1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5hcHBlbmQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICBjaGVja0J1dHRvbi5hcHBlbmQoY2hlY2tJY29uKTtcbiAgICAgICAgICAgIGRhdGVCdXR0b24uYXBwZW5kKGRhdGVJY29uKTtcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5hcHBlbmQoZXhwYW5kSWNvbik7XG4gICAgICAgICAgICBsZWZ0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoY2hlY2tCdXR0b24pO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25zQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgICAgICBkYXRlQnV0dG9uLFxuICAgICAgICAgICAgICAgIGV4cGFuZEJ1dHRvbixcbiAgICAgICAgICAgICAgICBkZWxldGVCdXR0b25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgICAgICBsZWZ0QnV0dG9uc0NvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0b2RvVGl0bGUsXG4gICAgICAgICAgICAgICAgcmlnaHRCdXR0b25zQ29udGFpbmVyXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kby5kb20gPSB0b2RvQ29udGFpbmVyO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5kb20pO1xuICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBmaW5pc2hUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIHRvZG8uZG9tLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWQtdG9kb1wiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0J1dHRvbiA9IHRvZG8uZG9tLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVjay1idXR0b25cIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tJY29uID0gY2hlY2tCdXR0b24ucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgICAgICAgIGNoZWNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvY29tcGxldGVkLWljb24uc3ZnXCIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgbG9hZFRvZG9zID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHByb2plY3QudG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9NYW5hZ2VyLmZpbmlzaFRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QuaW5kZXhPZih0b2RvKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lcixcbiAgICAgICAgICAgIGxvYWRUb2RvcyxcbiAgICAgICAgICAgIGZpbmlzaFRvZG8sXG4gICAgICAgICAgICBleHBhbmRUb2RvLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgbGV0IHByb2plY3REb20gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3RSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdERvbS5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5vcGVuUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgbG9hZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgICAgICAgICBsZXQgcmV0dXJuVG9Ib21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiPCBSZXR1cm4gSG9tZVwiO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNZW51RG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL3RyYXNoLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudGl0bGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNyZWF0ZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBsZXQgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL3BsdXMtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuY3JlYXRlVG9kbyh0b2RvQ3JlYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXIuYXBwZW5kKHRvZG9DcmVhdGVJbnB1dCwgdG9kb0NyZWF0ZUJ1dHRvbik7XG4gICAgICAgICAgICB0b2RvRG9tLmxvYWRUb2Rvcyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBuYXZCYXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVUZXh0LFxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgICAgICBuYXZCYXIsXG4gICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0b2RvRG9tLnRvZG9MaXN0Q29udGFpbmVyXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0TGlzdFJlbmRlciwgY3JlYXRlUHJvamVjdCwgbG9hZFByb2plY3QgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdE1lbnVEb20sIHByb2plY3REb20sIHRvZG9Eb20sIGNsZWFyUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZURvbTtcbiIsImltcG9ydCBwYWdlRG9tIGZyb20gXCIuLi9tb2R1bGVzL3BhZ2Vkb20uanNcIjtcbmxldCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0geyB0b2RvTGlzdDogW10gfTtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiBcIlRlc3QgUHJvamVjdFwiLFxuICAgICAgICAgICAgdG9kb0xpc3Q6IFtdLFxuICAgICAgICB9LFxuICAgIF07XG4gICAgbGV0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAodGl0bGUpIHtcbiAgICAgICAgbGV0IHByb2plY3QgPSB7IHRpdGxlLCB0b2RvTGlzdDogW10gfTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwcm9qZWN0KTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgICAgICBwYWdlRG9tLnByb2plY3REb20ucHJvamVjdExpc3RSZW5kZXIoKTtcbiAgICB9O1xuICAgIGxldCBvcGVuUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgIHBhZ2VEb20uY2xlYXJQYWdlKCk7XG4gICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgcGFnZURvbS5wcm9qZWN0RG9tLmxvYWRQcm9qZWN0KHByb2plY3QpO1xuICAgIH07XG4gICAgbGV0IGRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RMaXN0W3Byb2plY3RMaXN0LmluZGV4T2YoY3VycmVudFByb2plY3QpXTtcbiAgICAgICAgcGFnZURvbS5jbGVhclBhZ2UoKTtcbiAgICAgICAgcGFnZURvbS5wcm9qZWN0TWVudURvbSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgcHJvamVjdExpc3QsXG4gICAgICAgIG9wZW5Qcm9qZWN0LFxuICAgICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCJpbXBvcnQgcGFnZURvbSBmcm9tIFwiLi9wYWdlZG9tLmpzXCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5sZXQgdG9kb01hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjcmVhdGVUb2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IHRvZG8gPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlRG9tLnRvZG9Eb20uZmluaXNoVG9kbyh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICBwYWdlRG9tLnRvZG9Eb20uY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QpO1xuICAgICAgICByZXR1cm4geyB0b2RvIH07XG4gICAgfTtcbiAgICBsZXQgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSXRlbSwgdG9kb0luZGV4KSB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdO1xuICAgIH07XG4gICAgbGV0IGZpbmlzaFRvZG8gPSBmdW5jdGlvbiAodG9kb0l0ZW0sIHRvZG9JbmRleCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWRUb2RvID0gcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3RbdG9kb0luZGV4XTtcbiAgICAgICAgc2VsZWN0ZWRUb2RvLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgIHBhZ2VEb20udG9kb0RvbS5maW5pc2hUb2RvKHNlbGVjdGVkVG9kbyk7XG4gICAgfTtcbiAgICByZXR1cm4geyBjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCBmaW5pc2hUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTWFuYWdlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdE1hbmFnZXIub3BlblByb2plY3QoeyB0aXRsZTogXCJUZXN0IFByb2plY3RcIiB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9