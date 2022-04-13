/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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
        homeTitle.textContent = "Choose a project:";
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
            todoDateInfo.textContent = `Due: ${todo.dueDate}`;
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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
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
        if (todo.dueDate === undefined) {
            todo.dueDate = new Date().toLocaleDateString();
        }
        _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList.push(todo);
        sortByDate();
        _pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].todoDom.createTodo(todo);
        console.log(_project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList);
        return { todo };
    };
    let deleteTodo = function (todoItem, todoIndex) {
        delete _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList[todoIndex];
        sortByDate();
    };
    let finishTodo = function (todoItem, todoIndex) {
        let selectedTodo = _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList[todoIndex];
        selectedTodo.completed = true;
        _pagedom_js__WEBPACK_IMPORTED_MODULE_0__["default"].todoDom.finishTodo(selectedTodo);
        sortByDate();
    };
    let sortByDate = function () {
        _project_manager_js__WEBPACK_IMPORTED_MODULE_1__["default"].currentProject.todoList.sort(date_fns__WEBPACK_IMPORTED_MODULE_2__["default"]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLFFBQVEscUVBQWlCO0FBQ3pCLFFBQVEsMEVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLGNBQWMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbENRO0FBQ0g7QUFDZTtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksc0VBQTBCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RkFBMkM7QUFDbkQ7QUFDQSxRQUFRLHNFQUEwQjtBQUNsQyxvQkFBb0IsbUZBQXNDO0FBQzFELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZUFBZSxtRkFBc0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1GQUFzQztBQUNqRTtBQUNBLFFBQVEsc0VBQTBCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0ZBQTJDLENBQUMsZ0RBQVU7QUFDOUQ7QUFDQSxhQUFhO0FBQ2IsQ0FBQzs7QUFFRCxpRUFBZSxXQUFXLEVBQUM7Ozs7Ozs7VUN4QzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEQ7QUFDMUQ7QUFDQSxJQUFJLCtFQUEwQixHQUFHLHVCQUF1QjtBQUN4RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcGFnZWRvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby1tYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuLi9tb2R1bGVzL3Byb2plY3QtbWFuYWdlci5qc1wiO1xuaW1wb3J0IHRvZG9NYW5hZ2VyIGZyb20gXCIuL3RvZG8tbWFuYWdlci5qc1wiO1xubGV0IHBhZ2VEb20gPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQ29udGFpbmVyLmlkID0gXCJtYWluLWNvbnRhaW5lclwiO1xuICAgIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbkNvbnRhaW5lcik7XG5cbiAgICBsZXQgcHJvamVjdE1lbnVEb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBob21lVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgIGhvbWVUaXRsZS50ZXh0Q29udGVudCA9IFwiQ2hvb3NlIGEgcHJvamVjdDpcIjtcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyZWF0ZS1jb250YWluZXJcIik7XG4gICAgICAgIGxldCBwcm9qZWN0Q3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jcmVhdGUtYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJDcmVhdGUgYSBwcm9qZWN0XCI7XG4gICAgICAgIGxldCBwcm9qZWN0Q3JlYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQ29udGFpbmVyLmFwcGVuZChwcm9qZWN0Q3JlYXRlSW5wdXQsIHByb2plY3RDcmVhdGVCdXR0b24pO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzaW5cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgIGlmIChrZXkuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLmNyZWF0ZVByb2plY3QocHJvamVjdENyZWF0ZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBwYWdlRG9tLnByb2plY3REb20ucHJvamVjdExpc3RSZW5kZXIoKTtcbiAgICAgICAgbWFpbkNvbnRhaW5lci5wcmVwZW5kKHByb2plY3RDcmVhdGVDb250YWluZXIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQoaG9tZVRpdGxlKTtcbiAgICB9O1xuICAgIGxldCBjbGVhclBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIG1haW5Db250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIH07XG4gICAgbGV0IHRvZG9Eb20gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgdG9kb0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1saXN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IGV4cGFuZFRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICBsZXQgdG9kb0V4cGFuZGVkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1leHBhbmRlZC1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0V4cGFuZGVkVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLnRpdGxlKTtcbiAgICAgICAgICAgIHRvZG9FeHBhbmRlZFRpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgICAgIGxldCB0b2RvSW5mb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvSW5mb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1pbmZvLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvUHJvamVjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIHRvZG9Qcm9qZWN0SW5mby50ZXh0Q29udGVudCA9IHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgbGV0IHRvZG9EYXRlSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb0RhdGVJbmZvLnRleHRDb250ZW50ID0gYER1ZTogJHt0b2RvLmR1ZURhdGV9YDtcbiAgICAgICAgICAgIGxldCB0b2RvUHJpb3JpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0b2RvUHJpb3JpdHlJbmZvLnRleHRDb250ZW50ID0gdG9kby5wcmlvcml0eTtcbiAgICAgICAgICAgIHRvZG9JbmZvQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgICAgICB0b2RvUHJvamVjdEluZm8sXG4gICAgICAgICAgICAgICAgdG9kb0RhdGVJbmZvLFxuICAgICAgICAgICAgICAgIHRvZG9Qcmlvcml0eUluZm9cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZCh0b2RvSW5mb0NvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBjcmVhdGVUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG9UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gYCR7dG9kby50aXRsZX1gO1xuICAgICAgICAgICAgbGV0IGxlZnRCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgcmlnaHRCdXR0b25zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1idXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNoZWNrLWJ0blwiKTtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuZmluaXNoVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgdG9kbyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QuaW5kZXhPZih0b2RvKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuZGVsZXRlVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgdG9kbyxcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QuaW5kZXhPZih0b2RvKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxvYWRUb2Rvcyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWJ0blwiKTtcbiAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBsZXQgZGF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGxldCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgICAgICAgICBkYXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgZXhwYW5kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGNoZWNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvaW5jb21wbGV0ZS1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIGxldCBkYXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBkYXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvZGF0ZS1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL3RyYXNoLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgbGV0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZXhwYW5kSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvZXhwYW5kLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmFwcGVuZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgIGNoZWNrQnV0dG9uLmFwcGVuZChjaGVja0ljb24pO1xuICAgICAgICAgICAgZGF0ZUJ1dHRvbi5hcHBlbmQoZGF0ZUljb24pO1xuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmFwcGVuZChleHBhbmRJY29uKTtcbiAgICAgICAgICAgIGxlZnRCdXR0b25zQ29udGFpbmVyLmFwcGVuZChjaGVja0J1dHRvbik7XG4gICAgICAgICAgICByaWdodEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGRhdGVCdXR0b24sXG4gICAgICAgICAgICAgICAgZXhwYW5kQnV0dG9uLFxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGxlZnRCdXR0b25zQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRvZG9UaXRsZSxcbiAgICAgICAgICAgICAgICByaWdodEJ1dHRvbnNDb250YWluZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBleHBhbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICAgICAgZXhwYW5kVG9kbyh0b2RvKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kby5kb20gPSB0b2RvQ29udGFpbmVyO1xuICAgICAgICAgICAgY29uc29sZS5sb2codG9kby5kb20pO1xuICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBmaW5pc2hUb2RvID0gZnVuY3Rpb24gKHRvZG8pIHtcbiAgICAgICAgICAgIHRvZG8uZG9tLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZWQtdG9kb1wiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0J1dHRvbiA9IHRvZG8uZG9tLnF1ZXJ5U2VsZWN0b3IoXCIudG9kby1jaGVjay1idXR0b25cIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tJY29uID0gY2hlY2tCdXR0b24ucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgICAgICAgICAgIGNoZWNrSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvY29tcGxldGVkLWljb24uc3ZnXCIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgbG9hZFRvZG9zID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHByb2plY3QudG9kb0xpc3QuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgICAgICAgICAgIGNyZWF0ZVRvZG8odG9kbyk7XG4gICAgICAgICAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvZG9NYW5hZ2VyLmZpbmlzaFRvZG8oXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QuaW5kZXhPZih0b2RvKVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8sXG4gICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lcixcbiAgICAgICAgICAgIGxvYWRUb2RvcyxcbiAgICAgICAgICAgIGZpbmlzaFRvZG8sXG4gICAgICAgICAgICBleHBhbmRUb2RvLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgbGV0IHByb2plY3REb20gPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdExpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1saXN0XCIpO1xuICAgICAgICBsZXQgcHJvamVjdExpc3RSZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5wcm9qZWN0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdERvbS5jcmVhdGVQcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RMaXN0Q29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNyZWF0ZVByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0LnRpdGxlO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQocHJvamVjdFRpdGxlKTtcbiAgICAgICAgICAgIHByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5vcGVuUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdExpc3RDb250YWluZXIuYXBwZW5kKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgbG9hZFByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdi1iYXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdFRpdGxlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZVRleHQudGV4dENvbnRlbnQgPSBgJHtwcm9qZWN0LnRpdGxlfWA7XG4gICAgICAgICAgICBsZXQgcmV0dXJuVG9Ib21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiPCBSZXR1cm4gSG9tZVwiO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyUGFnZSgpO1xuICAgICAgICAgICAgICAgIHByb2plY3RNZW51RG9tKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRlbGV0ZUljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL3RyYXNoLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiaWNvbi1idG5cIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoZGVsZXRlSWNvbik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuZGVsZXRlUHJvamVjdChcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudGl0bGVcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNyZWF0ZS1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBsZXQgdG9kb0NyZWF0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBsZXQgcGx1c0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgcGx1c0ljb24uc2V0QXR0cmlidXRlKFwic3JjXCIsIFwiLi4vYXNzZXRzL3BsdXMtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmFwcGVuZENoaWxkKHBsdXNJY29uKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmZvY3VzKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuY3JlYXRlVG9kbyh0b2RvQ3JlYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LnZhbHVlID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImZvY3Vzb3V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXIuYXBwZW5kKHRvZG9DcmVhdGVJbnB1dCwgdG9kb0NyZWF0ZUJ1dHRvbik7XG4gICAgICAgICAgICB0b2RvRG9tLmxvYWRUb2Rvcyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdCk7XG4gICAgICAgICAgICBuYXZCYXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIHJldHVyblRvSG9tZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBwcm9qZWN0VGl0bGVUZXh0LFxuICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChcbiAgICAgICAgICAgICAgICBuYXZCYXIsXG4gICAgICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lcixcbiAgICAgICAgICAgICAgICB0b2RvRG9tLnRvZG9MaXN0Q29udGFpbmVyXG4gICAgICAgICAgICApO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4geyBwcm9qZWN0TGlzdFJlbmRlciwgY3JlYXRlUHJvamVjdCwgbG9hZFByb2plY3QgfTtcbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdE1lbnVEb20sIHByb2plY3REb20sIHRvZG9Eb20sIGNsZWFyUGFnZSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcGFnZURvbTtcbiIsImltcG9ydCBwYWdlRG9tIGZyb20gXCIuLi9tb2R1bGVzL3BhZ2Vkb20uanNcIjtcbmxldCBwcm9qZWN0TWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGN1cnJlbnRQcm9qZWN0ID0geyB0aXRsZTogXCJUZXN0IFByb2plY3RcIiwgdG9kb0xpc3Q6IFtdIH07XG4gICAgbGV0IHByb2plY3RMaXN0ID0gW2N1cnJlbnRQcm9qZWN0XTtcbiAgICBsZXQgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uICh0aXRsZSkge1xuICAgICAgICBsZXQgcHJvamVjdCA9IHsgdGl0bGUsIHRvZG9MaXN0OiBbXSB9O1xuICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHByb2plY3QpO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gICAgICAgIHBhZ2VEb20ucHJvamVjdERvbS5wcm9qZWN0TGlzdFJlbmRlcigpO1xuICAgIH07XG4gICAgbGV0IG9wZW5Qcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgcGFnZURvbS5jbGVhclBhZ2UoKTtcbiAgICAgICAgY3VycmVudFByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICBwYWdlRG9tLnByb2plY3REb20ubG9hZFByb2plY3QocHJvamVjdCk7XG4gICAgfTtcbiAgICBsZXQgZGVsZXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0TmFtZSkge1xuICAgICAgICBpZiAocHJvamVjdExpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdExpc3RbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkZWxldGUgcHJvamVjdExpc3RbcHJvamVjdExpc3QuaW5kZXhPZihjdXJyZW50UHJvamVjdCldO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgICAgcGFnZURvbS5jbGVhclBhZ2UoKTtcbiAgICAgICAgcGFnZURvbS5wcm9qZWN0TWVudURvbSgpO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgcHJvamVjdExpc3QsXG4gICAgICAgIG9wZW5Qcm9qZWN0LFxuICAgICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgZGVsZXRlUHJvamVjdCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdE1hbmFnZXI7XG4iLCJpbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgcGFnZURvbSBmcm9tIFwiLi9wYWdlZG9tLmpzXCI7XG5pbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5sZXQgdG9kb01hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjcmVhdGVUb2RvID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgbGV0IHRvZG8gPSB7XG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgcHJpb3JpdHksXG4gICAgICAgICAgICBkdWVEYXRlLFxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYWdlRG9tLnRvZG9Eb20uZmluaXNoVG9kbyh0b2RvKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9kby5kdWVEYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRvZG8uZHVlRGF0ZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgc29ydEJ5RGF0ZSgpO1xuICAgICAgICBwYWdlRG9tLnRvZG9Eb20uY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3QpO1xuICAgICAgICByZXR1cm4geyB0b2RvIH07XG4gICAgfTtcbiAgICBsZXQgZGVsZXRlVG9kbyA9IGZ1bmN0aW9uICh0b2RvSXRlbSwgdG9kb0luZGV4KSB7XG4gICAgICAgIGRlbGV0ZSBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdO1xuICAgICAgICBzb3J0QnlEYXRlKCk7XG4gICAgfTtcbiAgICBsZXQgZmluaXNoVG9kbyA9IGZ1bmN0aW9uICh0b2RvSXRlbSwgdG9kb0luZGV4KSB7XG4gICAgICAgIGxldCBzZWxlY3RlZFRvZG8gPSBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdFt0b2RvSW5kZXhdO1xuICAgICAgICBzZWxlY3RlZFRvZG8uY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgcGFnZURvbS50b2RvRG9tLmZpbmlzaFRvZG8oc2VsZWN0ZWRUb2RvKTtcbiAgICAgICAgc29ydEJ5RGF0ZSgpO1xuICAgIH07XG4gICAgbGV0IHNvcnRCeURhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0LnNvcnQoY29tcGFyZUFzYyk7XG4gICAgfTtcbiAgICByZXR1cm4geyBjcmVhdGVUb2RvLCBkZWxldGVUb2RvLCBmaW5pc2hUb2RvIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvTWFuYWdlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHByb2plY3RNYW5hZ2VyIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgcHJvamVjdE1hbmFnZXIub3BlblByb2plY3QoeyB0aXRsZTogXCJUZXN0IFByb2plY3RcIiB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9