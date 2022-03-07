/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/homepage.js":
/*!*********************************!*\
  !*** ./src/modules/homepage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _timemanager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timemanager.js */ "./src/modules/timemanager.js");

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
            if (_timemanager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentTime.partOfDay == "morning") {
                mainContainer.classList.add("morning");
            } else if (_timemanager_js__WEBPACK_IMPORTED_MODULE_0__["default"].currentTime.partOfDay == "afternoon") {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);


/***/ }),

/***/ "./src/modules/timemanager.js":
/*!************************************!*\
  !*** ./src/modules/timemanager.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let timeManager = (function () {
    let currentTime = {
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        second: new Date().getSeconds(),
        partOfDay: "morning",
    };
    if (currentTime.hour > 12 && currentTime.hour < 18) {
        currentTime.partOfDay = "afternoon";
    } else if (currentTime.hour < 12 && currentTime.hour > 3) {
        currentTime.partOfDay = "morning";
    } else {
        currentTime.partOfDay = "evening";
    }
    return { currentTime };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeManager);


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
/* harmony import */ var _modules_homepage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/homepage.js */ "./src/modules/homepage.js");
/* harmony import */ var _modules_timemanager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/timemanager.js */ "./src/modules/timemanager.js");



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZFQUFpQztBQUNqRDtBQUNBLGNBQWMsU0FBUyw2RUFBaUM7QUFDeEQ7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsS0FBSztBQUNMLGFBQWE7QUFDYixDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLFFBQVEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDekN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLGFBQWE7QUFDYixDQUFDOztBQUVELGlFQUFlLFdBQVcsRUFBQzs7Ozs7OztVQ2pCM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNONkM7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RpbWVtYW5hZ2VyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGltZU1hbmFnZXIgZnJvbSBcIi4vdGltZW1hbmFnZXIuanNcIjtcbmxldCBob21lUGFnZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRvZG9NYW5hZ2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHRvZG9MaXN0ID0gW107XG4gICAgICAgIGxldCB0b2RvQ3JlYXRlID0gZnVuY3Rpb24gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGR1ZURhdGUpIHtcbiAgICAgICAgICAgIGxldCB0b2RvID0geyB0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlIH07XG4gICAgICAgICAgICB0b2RvTGlzdC5wdXNoKHRvZG8pO1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9kbyB9O1xuICAgICAgICB9O1xuICAgIH0pKCk7XG4gICAgbGV0IHBhZ2VSZW5kZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgbWFpbkNvbnRlbnRDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICAgICAgICAgIGxldCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG1haW5Db250YWluZXIuaWQgPSBcIm1haW4tY29udGFpbmVyXCI7XG4gICAgICAgICAgICBpZiAodGltZU1hbmFnZXIuY3VycmVudFRpbWUucGFydE9mRGF5ID09IFwibW9ybmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibW9ybmluZ1wiKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZU1hbmFnZXIuY3VycmVudFRpbWUucGFydE9mRGF5ID09IFwiYWZ0ZXJub29uXCIpIHtcbiAgICAgICAgICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhZnRlcm5vb25cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1haW5Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImV2ZW5pbmdcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW5Db250YWluZXIpO1xuICAgICAgICB9O1xuICAgICAgICBsZXQgY3JlYXRlVG9kbyA9IGZ1bmN0aW9uICh0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgICAgIGxldCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgICAgIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XG4gICAgICAgICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZURhdGU7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHsgZG9tQ3JlYXRlIH07XG4gICAgfSkoKTtcbiAgICByZXR1cm4geyBwYWdlUmVuZGVyLCB0b2RvTWFuYWdlciB9O1xufSkoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIGhvbWVQYWdlLnBhZ2VSZW5kZXIuZG9tQ3JlYXRlKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgaG9tZVBhZ2U7XG4iLCJsZXQgdGltZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCBjdXJyZW50VGltZSA9IHtcbiAgICAgICAgaG91cjogbmV3IERhdGUoKS5nZXRIb3VycygpLFxuICAgICAgICBtaW51dGU6IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpLFxuICAgICAgICBzZWNvbmQ6IG5ldyBEYXRlKCkuZ2V0U2Vjb25kcygpLFxuICAgICAgICBwYXJ0T2ZEYXk6IFwibW9ybmluZ1wiLFxuICAgIH07XG4gICAgaWYgKGN1cnJlbnRUaW1lLmhvdXIgPiAxMiAmJiBjdXJyZW50VGltZS5ob3VyIDwgMTgpIHtcbiAgICAgICAgY3VycmVudFRpbWUucGFydE9mRGF5ID0gXCJhZnRlcm5vb25cIjtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRUaW1lLmhvdXIgPCAxMiAmJiBjdXJyZW50VGltZS5ob3VyID4gMykge1xuICAgICAgICBjdXJyZW50VGltZS5wYXJ0T2ZEYXkgPSBcIm1vcm5pbmdcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjdXJyZW50VGltZS5wYXJ0T2ZEYXkgPSBcImV2ZW5pbmdcIjtcbiAgICB9XG4gICAgcmV0dXJuIHsgY3VycmVudFRpbWUgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVNYW5hZ2VyO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaG9tZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9ob21lcGFnZS5qc1wiO1xuaW1wb3J0IHRpbWVNYW5hZ2VyIGZyb20gXCIuL21vZHVsZXMvdGltZW1hbmFnZXIuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==