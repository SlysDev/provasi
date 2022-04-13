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
            todoProjectInfo.textContent = `Project: ${_modules_project_manager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentProject.title}`;
            let todoDateInfo = document.createElement("p");
            if (todo.dueDate == new Date().toLocaleDateString()) {
                todoDateInfo.textContent = "Due: Today";
            } else {
                todoDateInfo.textContent = `Due: ${todo.dueDate}`;
            }
            let todoPriorityInfo = document.createElement("p");
            todoPriorityInfo.textContent = todo.priority;
            todoInfoContainer.append(
                todoExpandedTitle,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0p3QztBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixXQUFXLGFBQWE7QUFDeEIsYUFBYSxRQUFRO0FBQ3JCLFlBQVksV0FBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLEVBQUUsc0VBQVk7QUFDZCxpQkFBaUIsNERBQU07QUFDdkIsa0JBQWtCLDREQUFNO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osY0FBYywwQkFBMEI7QUFDeEMsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcER5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsYUFBYTtBQUN4QixhQUFhLE1BQU07QUFDbkIsWUFBWSxXQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixFQUFFLHNFQUFZO0FBQ2QseURBQXlEOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLHdLQUF3Szs7QUFFeEs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRDJEO0FBQ2Y7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpRkFBNEI7QUFDaEQ7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0ZBQTZCO0FBQ3JELHNEQUFzRCx3RkFBbUMsQ0FBQztBQUMxRjtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFdBQVc7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtRUFBc0I7QUFDdEM7QUFDQSxvQkFBb0IsbUdBQThDO0FBQ2xFO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxnQkFBZ0IsbUVBQXNCO0FBQ3RDO0FBQ0Esb0JBQW9CLG1HQUE4QztBQUNsRTtBQUNBO0FBQ0EsMEJBQTBCLGtGQUE2QjtBQUN2RCxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtGQUE2QjtBQUN6RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUVBQXNCO0FBQzFDO0FBQ0Esd0JBQXdCLG1HQUE4QztBQUN0RTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdUZBQWtDO0FBQzlDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQiwrRUFBMEI7QUFDMUMsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixpRkFBNEI7QUFDNUMsb0JBQW9CLHdGQUFtQztBQUN2RDtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUVBQXNCO0FBQzlDO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4QixrRkFBNkI7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLOztBQUVMLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3RRcUI7QUFDNUM7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0EsUUFBUSx3RkFBb0M7QUFDNUM7QUFDQTtBQUNBLFFBQVEscUVBQWlCO0FBQ3pCO0FBQ0EsUUFBUSxrRkFBOEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsUUFBUSxxRUFBaUI7QUFDekIsUUFBUSwwRUFBc0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsY0FBYyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ1E7QUFDSDtBQUNlO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxzRUFBMEI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHdGQUEyQztBQUNuRDtBQUNBLFFBQVEsc0VBQTBCO0FBQ2xDLG9CQUFvQixtRkFBc0M7QUFDMUQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxlQUFlLG1GQUFzQztBQUNyRDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsbUZBQXNDO0FBQ2pFO0FBQ0EsUUFBUSxzRUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RkFBMkMsQ0FBQyxnREFBVTtBQUM5RDtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ3hDM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04wRDtBQUMxRDtBQUNBLElBQUksK0VBQTBCLEdBQUcsdUJBQXVCO0FBQ3hELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wYWdlZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3QtbWFuYWdlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4uL21vZHVsZXMvcHJvamVjdC1tYW5hZ2VyLmpzXCI7XG5pbXBvcnQgdG9kb01hbmFnZXIgZnJvbSBcIi4vdG9kby1tYW5hZ2VyLmpzXCI7XG5sZXQgcGFnZURvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gICAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcblxuICAgIGxldCBwcm9qZWN0TWVudURvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGhvbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgaG9tZVRpdGxlLnRleHRDb250ZW50ID0gXCJDaG9vc2UgYSBwcm9qZWN0OlwiO1xuICAgICAgICBsZXQgcHJvamVjdENyZWF0ZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY3JlYXRlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNyZWF0ZS1idXR0b25cIik7XG4gICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBhIHByb2plY3RcIjtcbiAgICAgICAgbGV0IHByb2plY3RDcmVhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByb2plY3RDcmVhdGVDb250YWluZXIuYXBwZW5kKHByb2plY3RDcmVhdGVJbnB1dCwgcHJvamVjdENyZWF0ZUJ1dHRvbik7XG4gICAgICAgIHByb2plY3RDcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNpblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1hbmFnZXIuY3JlYXRlUHJvamVjdChwcm9qZWN0Q3JlYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJvamVjdENyZWF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBwcm9qZWN0Q3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIHByb2plY3RDcmVhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHBhZ2VEb20ucHJvamVjdERvbS5wcm9qZWN0TGlzdFJlbmRlcigpO1xuICAgICAgICBtYWluQ29udGFpbmVyLnByZXBlbmQocHJvamVjdENyZWF0ZUNvbnRhaW5lcik7XG4gICAgICAgIG1haW5Db250YWluZXIucHJlcGVuZChob21lVGl0bGUpO1xuICAgIH07XG4gICAgbGV0IGNsZWFyUGFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbWFpbkNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgfTtcbiAgICBsZXQgdG9kb0RvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWxpc3QtY29udGFpbmVyXCIpO1xuICAgICAgICBsZXQgZXhwYW5kVG9kbyA9IGZ1bmN0aW9uICh0b2RvKSB7XG4gICAgICAgICAgICBjbGVhclBhZ2UoKTtcbiAgICAgICAgICAgIGxldCB0b2RvRXhwYW5kZWRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb0V4cGFuZGVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWV4cGFuZGVkLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvRXhwYW5kZWRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG8udGl0bGUpO1xuICAgICAgICAgICAgdG9kb0V4cGFuZGVkVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgbGV0IHRvZG9JbmZvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9JbmZvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWluZm8tY29udGFpbmVyXCIpO1xuICAgICAgICAgICAgbGV0IHRvZG9Qcm9qZWN0SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QpO1xuICAgICAgICAgICAgdG9kb1Byb2plY3RJbmZvLnRleHRDb250ZW50ID0gYFByb2plY3Q6ICR7cHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudGl0bGV9YDtcbiAgICAgICAgICAgIGxldCB0b2RvRGF0ZUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGlmICh0b2RvLmR1ZURhdGUgPT0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgIHRvZG9EYXRlSW5mby50ZXh0Q29udGVudCA9IFwiRHVlOiBUb2RheVwiO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0b2RvRGF0ZUluZm8udGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRvZG9Qcmlvcml0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHRvZG9Qcmlvcml0eUluZm8udGV4dENvbnRlbnQgPSB0b2RvLnByaW9yaXR5O1xuICAgICAgICAgICAgdG9kb0luZm9Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIHRvZG9FeHBhbmRlZFRpdGxlLFxuICAgICAgICAgICAgICAgIHRvZG9Qcm9qZWN0SW5mbyxcbiAgICAgICAgICAgICAgICB0b2RvRGF0ZUluZm8sXG4gICAgICAgICAgICAgICAgdG9kb1ByaW9yaXR5SW5mb1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRvZG9JbmZvQ29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgbGV0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9kby1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSBgJHt0b2RvLnRpdGxlfWA7XG4gICAgICAgICAgICBsZXQgbGVmdEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCByaWdodEJ1dHRvbnNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgcmlnaHRCdXR0b25zQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgICAgICBsZXQgY2hlY2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcInRvZG8tY2hlY2stYnRuXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5maW5pc2hUb2RvKFxuICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5kZWxldGVUb2RvKFxuICAgICAgICAgICAgICAgICAgICB0b2RvLFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbG9hZFRvZG9zKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtYnRuXCIpO1xuICAgICAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGxldCBkYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGRhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICAgICAgICAgIGRhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkYXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpbnZpc2libGVcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBleHBhbmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgZXhwYW5kQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgY2hlY2tJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9pbmNvbXBsZXRlLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgbGV0IGRhdGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgICAgIGRhdGVJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9kYXRlLWljb24uc3ZnXCIpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvdHJhc2gtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBsZXQgZXhwYW5kSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBleHBhbmRJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9leHBhbmQtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBkZWxldGVCdXR0b24uYXBwZW5kKGRlbGV0ZUljb24pO1xuICAgICAgICAgICAgY2hlY2tCdXR0b24uYXBwZW5kKGNoZWNrSWNvbik7XG4gICAgICAgICAgICBkYXRlQnV0dG9uLmFwcGVuZChkYXRlSWNvbik7XG4gICAgICAgICAgICBleHBhbmRCdXR0b24uYXBwZW5kKGV4cGFuZEljb24pO1xuICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGNoZWNrQnV0dG9uKTtcbiAgICAgICAgICAgIHJpZ2h0QnV0dG9uc0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgZGF0ZUJ1dHRvbixcbiAgICAgICAgICAgICAgICBleHBhbmRCdXR0b24sXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgbGVmdEJ1dHRvbnNDb250YWluZXIsXG4gICAgICAgICAgICAgICAgdG9kb1RpdGxlLFxuICAgICAgICAgICAgICAgIHJpZ2h0QnV0dG9uc0NvbnRhaW5lclxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGV4cGFuZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgICAgICBleHBhbmRUb2RvKHRvZG8pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0b2RvLmRvbSA9IHRvZG9Db250YWluZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0b2RvLmRvbSk7XG4gICAgICAgICAgICB0b2RvTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGZpbmlzaFRvZG8gPSBmdW5jdGlvbiAodG9kbykge1xuICAgICAgICAgICAgdG9kby5kb20uY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZC10b2RvXCIpO1xuICAgICAgICAgICAgbGV0IGNoZWNrQnV0dG9uID0gdG9kby5kb20ucXVlcnlTZWxlY3RvcihcIi50b2RvLWNoZWNrLWJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBjaGVja0ljb24gPSBjaGVja0J1dHRvbi5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICAgICAgICAgICAgY2hlY2tJY29uLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9jb21wbGV0ZWQtaWNvbi5zdmdcIik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBsb2FkVG9kb3MgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICAgICAgdG9kb0xpc3RDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgcHJvamVjdC50b2RvTGlzdC5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgICAgY3JlYXRlVG9kbyh0b2RvKTtcbiAgICAgICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9kb01hbmFnZXIuZmluaXNoVG9kbyhcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8sXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5pbmRleE9mKHRvZG8pXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlVG9kbyxcbiAgICAgICAgICAgIHRvZG9MaXN0Q29udGFpbmVyLFxuICAgICAgICAgICAgbG9hZFRvZG9zLFxuICAgICAgICAgICAgZmluaXNoVG9kbyxcbiAgICAgICAgICAgIGV4cGFuZFRvZG8sXG4gICAgICAgIH07XG4gICAgfSkoKTtcbiAgICBsZXQgcHJvamVjdERvbSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWxpc3RcIik7XG4gICAgICAgIGxldCBwcm9qZWN0TGlzdFJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLnByb2plY3RMaXN0LmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0RG9tLmNyZWF0ZVByb2plY3QocHJvamVjdCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdExpc3RDb250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY3JlYXRlUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QudGl0bGU7XG4gICAgICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZChwcm9qZWN0VGl0bGUpO1xuICAgICAgICAgICAgcHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHByb2plY3RNYW5hZ2VyLm9wZW5Qcm9qZWN0KHByb2plY3QpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdENvbnRhaW5lci5hcHBlbmQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgIH07XG4gICAgICAgIGxldCBsb2FkUHJvamVjdCA9IGZ1bmN0aW9uIChwcm9qZWN0KSB7XG4gICAgICAgICAgICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwibmF2LWJhclwiKTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0VGl0bGVUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlVGV4dC50ZXh0Q29udGVudCA9IGAke3Byb2plY3QudGl0bGV9YDtcbiAgICAgICAgICAgIGxldCByZXR1cm5Ub0hvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLnRleHRDb250ZW50ID0gXCI8IFJldHVybiBIb21lXCI7XG4gICAgICAgICAgICByZXR1cm5Ub0hvbWVCdXR0b24uY2xhc3NMaXN0LmFkZChcImljb24tYnRuXCIpO1xuICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJQYWdlKCk7XG4gICAgICAgICAgICAgICAgcHJvamVjdE1lbnVEb20oKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICAgICAgbGV0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgZGVsZXRlSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvdHJhc2gtaWNvbi5zdmdcIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJpY29uLWJ0blwiKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1idG5cIik7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0QnV0dG9uLmFwcGVuZChkZWxldGVJY29uKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5kZWxldGVQcm9qZWN0KFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50aXRsZVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvZG8tY3JlYXRlLWNvbnRhaW5lclwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG4gICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvQ3JlYXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgIGxldCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgICAgICBwbHVzSWNvbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLi9hc3NldHMvcGx1cy1pY29uLnN2Z1wiKTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5jbGFzc0xpc3QucmVtb3ZlKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c2luXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrZXkuY29kZSA9PT0gXCJFbnRlclwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvTWFuYWdlci5jcmVhdGVUb2RvKHRvZG9DcmVhdGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW52aXNpYmxlXCIpO1xuICAgICAgICAgICAgICAgIHRvZG9DcmVhdGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImludmlzaWJsZVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdG9kb0NyZWF0ZUNvbnRhaW5lci5hcHBlbmQodG9kb0NyZWF0ZUlucHV0LCB0b2RvQ3JlYXRlQnV0dG9uKTtcbiAgICAgICAgICAgIHRvZG9Eb20ubG9hZFRvZG9zKHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0KTtcbiAgICAgICAgICAgIG5hdkJhci5hcHBlbmQoXG4gICAgICAgICAgICAgICAgcmV0dXJuVG9Ib21lQnV0dG9uLFxuICAgICAgICAgICAgICAgIHByb2plY3RUaXRsZVRleHQsXG4gICAgICAgICAgICAgICAgZGVsZXRlUHJvamVjdEJ1dHRvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIG5hdkJhcixcbiAgICAgICAgICAgICAgICB0b2RvQ3JlYXRlQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIHRvZG9Eb20udG9kb0xpc3RDb250YWluZXJcbiAgICAgICAgICAgICk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7IHByb2plY3RMaXN0UmVuZGVyLCBjcmVhdGVQcm9qZWN0LCBsb2FkUHJvamVjdCB9O1xuICAgIH0pKCk7XG5cbiAgICByZXR1cm4geyBwcm9qZWN0TWVudURvbSwgcHJvamVjdERvbSwgdG9kb0RvbSwgY2xlYXJQYWdlIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlRG9tO1xuIiwiaW1wb3J0IHBhZ2VEb20gZnJvbSBcIi4uL21vZHVsZXMvcGFnZWRvbS5qc1wiO1xubGV0IHByb2plY3RNYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgY3VycmVudFByb2plY3QgPSB7IHRpdGxlOiBcIlRlc3QgUHJvamVjdFwiLCB0b2RvTGlzdDogW10gfTtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbY3VycmVudFByb2plY3RdO1xuICAgIGxldCBjcmVhdGVQcm9qZWN0ID0gZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIGxldCBwcm9qZWN0ID0geyB0aXRsZSwgdG9kb0xpc3Q6IFtdIH07XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocHJvamVjdCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaXN0KTtcbiAgICAgICAgcGFnZURvbS5wcm9qZWN0RG9tLnByb2plY3RMaXN0UmVuZGVyKCk7XG4gICAgfTtcbiAgICBsZXQgb3BlblByb2plY3QgPSBmdW5jdGlvbiAocHJvamVjdCkge1xuICAgICAgICBwYWdlRG9tLmNsZWFyUGFnZSgpO1xuICAgICAgICBjdXJyZW50UHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHBhZ2VEb20ucHJvamVjdERvbS5sb2FkUHJvamVjdChwcm9qZWN0KTtcbiAgICB9O1xuICAgIGxldCBkZWxldGVQcm9qZWN0ID0gZnVuY3Rpb24gKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGlmIChwcm9qZWN0TGlzdC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0TGlzdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBwcm9qZWN0TGlzdFtwcm9qZWN0TGlzdC5pbmRleE9mKGN1cnJlbnRQcm9qZWN0KV07XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICAgICAgICBwYWdlRG9tLmNsZWFyUGFnZSgpO1xuICAgICAgICBwYWdlRG9tLnByb2plY3RNZW51RG9tKCk7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBwcm9qZWN0TGlzdCxcbiAgICAgICAgb3BlblByb2plY3QsXG4gICAgICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgICAgICBkZWxldGVQcm9qZWN0LFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0TWFuYWdlcjtcbiIsImltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBwYWdlRG9tIGZyb20gXCIuL3BhZ2Vkb20uanNcIjtcbmltcG9ydCBwcm9qZWN0TWFuYWdlciBmcm9tIFwiLi9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmxldCB0b2RvTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGNyZWF0ZVRvZG8gPSBmdW5jdGlvbiAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSkge1xuICAgICAgICBsZXQgdG9kbyA9IHtcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmlvcml0eSxcbiAgICAgICAgICAgIGR1ZURhdGUsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgICAgICBpZiAodG9kby5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhZ2VEb20udG9kb0RvbS5maW5pc2hUb2RvKHRvZG8pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2RvLmR1ZURhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdG9kby5kdWVEYXRlID0gbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICBzb3J0QnlEYXRlKCk7XG4gICAgICAgIHBhZ2VEb20udG9kb0RvbS5jcmVhdGVUb2RvKHRvZG8pO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0TWFuYWdlci5jdXJyZW50UHJvamVjdC50b2RvTGlzdCk7XG4gICAgICAgIHJldHVybiB7IHRvZG8gfTtcbiAgICB9O1xuICAgIGxldCBkZWxldGVUb2RvID0gZnVuY3Rpb24gKHRvZG9JdGVtLCB0b2RvSW5kZXgpIHtcbiAgICAgICAgZGVsZXRlIHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0W3RvZG9JbmRleF07XG4gICAgICAgIHNvcnRCeURhdGUoKTtcbiAgICB9O1xuICAgIGxldCBmaW5pc2hUb2RvID0gZnVuY3Rpb24gKHRvZG9JdGVtLCB0b2RvSW5kZXgpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkVG9kbyA9IHByb2plY3RNYW5hZ2VyLmN1cnJlbnRQcm9qZWN0LnRvZG9MaXN0W3RvZG9JbmRleF07XG4gICAgICAgIHNlbGVjdGVkVG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICBwYWdlRG9tLnRvZG9Eb20uZmluaXNoVG9kbyhzZWxlY3RlZFRvZG8pO1xuICAgICAgICBzb3J0QnlEYXRlKCk7XG4gICAgfTtcbiAgICBsZXQgc29ydEJ5RGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcHJvamVjdE1hbmFnZXIuY3VycmVudFByb2plY3QudG9kb0xpc3Quc29ydChjb21wYXJlQXNjKTtcbiAgICB9O1xuICAgIHJldHVybiB7IGNyZWF0ZVRvZG8sIGRlbGV0ZVRvZG8sIGZpbmlzaFRvZG8gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9NYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjdE1hbmFnZXIgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0LW1hbmFnZXIuanNcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBwcm9qZWN0TWFuYWdlci5vcGVuUHJvamVjdCh7IHRpdGxlOiBcIlRlc3QgUHJvamVjdFwiIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=