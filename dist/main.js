/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let homePage = (function () {
    let timeManager = (function () {
        let currentTime = {
            hour: new Date().getHours(),
            minute: new Date().getMinutes(),
            second: new Date().getSeconds(),
            partOfDay: null,
        };
        if (currentTime.hour > 12 && currentTime.hour < 6) {
            currentTime.partOfDay = "afternoon";
        } else if (currentTime.hour < 12 && currentTime.hour > 3) {
            currentTime.partOfDay = "morning";
        } else {
            currentTime.partOfDay = "evening";
        }
        return { currentTime };
    })();
    let todoManager = (function () {
        let todoList = [];
        let todoCreate = function (title, description, priority, dueDate) {
            let todo = { title, description, priority, dueDate };
            todoList.push(todo);
            return { todo };
        };
    })();
    let pageRender = (function () {
        let domCreate = function () {
            let content = document.querySelector("#content");
            let mainContainer = document.createElement("div");
            mainContainer.id = "main-container";
            let navContainer = document.createElement("nav");
            let navLeft = document.createElement("div");
            let navRight = document.createElement("div");
            navLeft.classList.add("nav-left");
            navRight.classList.add("nav-right");
            let logoImage = document.createElement("img");
            logoImage.setAttribute("src", "../assets/emblem.png");
            logoImage.setAttribute("width", "48px");
            navLeft.appendChild(logoImage);
            navContainer.append(navLeft, navRight);
            let header = document.createElement("header");
            let headerText = document.createElement("h1");
            if (timeManager.currentTime.partOfDay == "morning") {
                header.style.background = "url(../assets/day-header-image.jpg)";
            } else if (timeManager.currentTime.partOfDay == "afternoon") {
                header.style.background =
                    "url(../assets/afternoon-header-image.jpg)";
            } else {
                header.style.background =
                    "url(../assets/evening-header-image.jpg)";
            }
            headerText.textContent = `Good ${timeManager.currentTime.partOfDay}!`;
            header.appendChild(headerText);
            mainContainer.appendChild(navContainer);
            mainContainer.appendChild(header);
            content.appendChild(mainContainer);
        };

        return { domCreate };
    })();
    return { pageRender, todoManager };
})();

document.addEventListener("DOMContentLoaded", function () {
    homePage.pageRender.domCreate();
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9tYWluLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtDQUFrQztBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixLQUFLO0FBQ0wsYUFBYTtBQUNiLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGhvbWVQYWdlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgdGltZU1hbmFnZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgY3VycmVudFRpbWUgPSB7XG4gICAgICAgICAgICBob3VyOiBuZXcgRGF0ZSgpLmdldEhvdXJzKCksXG4gICAgICAgICAgICBtaW51dGU6IG5ldyBEYXRlKCkuZ2V0TWludXRlcygpLFxuICAgICAgICAgICAgc2Vjb25kOiBuZXcgRGF0ZSgpLmdldFNlY29uZHMoKSxcbiAgICAgICAgICAgIHBhcnRPZkRheTogbnVsbCxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lLmhvdXIgPiAxMiAmJiBjdXJyZW50VGltZS5ob3VyIDwgNikge1xuICAgICAgICAgICAgY3VycmVudFRpbWUucGFydE9mRGF5ID0gXCJhZnRlcm5vb25cIjtcbiAgICAgICAgfSBlbHNlIGlmIChjdXJyZW50VGltZS5ob3VyIDwgMTIgJiYgY3VycmVudFRpbWUuaG91ciA+IDMpIHtcbiAgICAgICAgICAgIGN1cnJlbnRUaW1lLnBhcnRPZkRheSA9IFwibW9ybmluZ1wiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3VycmVudFRpbWUucGFydE9mRGF5ID0gXCJldmVuaW5nXCI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgY3VycmVudFRpbWUgfTtcbiAgICB9KSgpO1xuICAgIGxldCB0b2RvTWFuYWdlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCB0b2RvTGlzdCA9IFtdO1xuICAgICAgICBsZXQgdG9kb0NyZWF0ZSA9IGZ1bmN0aW9uICh0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkdWVEYXRlKSB7XG4gICAgICAgICAgICBsZXQgdG9kbyA9IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZHVlRGF0ZSB9O1xuICAgICAgICAgICAgdG9kb0xpc3QucHVzaCh0b2RvKTtcbiAgICAgICAgICAgIHJldHVybiB7IHRvZG8gfTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xuICAgIGxldCBwYWdlUmVuZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IGRvbUNyZWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuICAgICAgICAgICAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5pZCA9IFwibWFpbi1jb250YWluZXJcIjtcbiAgICAgICAgICAgIGxldCBuYXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibmF2XCIpO1xuICAgICAgICAgICAgbGV0IG5hdkxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgbGV0IG5hdlJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIG5hdkxlZnQuY2xhc3NMaXN0LmFkZChcIm5hdi1sZWZ0XCIpO1xuICAgICAgICAgICAgbmF2UmlnaHQuY2xhc3NMaXN0LmFkZChcIm5hdi1yaWdodFwiKTtcbiAgICAgICAgICAgIGxldCBsb2dvSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICAgICAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL2Fzc2V0cy9lbWJsZW0ucG5nXCIpO1xuICAgICAgICAgICAgbG9nb0ltYWdlLnNldEF0dHJpYnV0ZShcIndpZHRoXCIsIFwiNDhweFwiKTtcbiAgICAgICAgICAgIG5hdkxlZnQuYXBwZW5kQ2hpbGQobG9nb0ltYWdlKTtcbiAgICAgICAgICAgIG5hdkNvbnRhaW5lci5hcHBlbmQobmF2TGVmdCwgbmF2UmlnaHQpO1xuICAgICAgICAgICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG4gICAgICAgICAgICBsZXQgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICAgICAgICAgIGlmICh0aW1lTWFuYWdlci5jdXJyZW50VGltZS5wYXJ0T2ZEYXkgPT0gXCJtb3JuaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwidXJsKC4uL2Fzc2V0cy9kYXktaGVhZGVyLWltYWdlLmpwZylcIjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGltZU1hbmFnZXIuY3VycmVudFRpbWUucGFydE9mRGF5ID09IFwiYWZ0ZXJub29uXCIpIHtcbiAgICAgICAgICAgICAgICBoZWFkZXIuc3R5bGUuYmFja2dyb3VuZCA9XG4gICAgICAgICAgICAgICAgICAgIFwidXJsKC4uL2Fzc2V0cy9hZnRlcm5vb24taGVhZGVyLWltYWdlLmpwZylcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnN0eWxlLmJhY2tncm91bmQgPVxuICAgICAgICAgICAgICAgICAgICBcInVybCguLi9hc3NldHMvZXZlbmluZy1oZWFkZXItaW1hZ2UuanBnKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IGBHb29kICR7dGltZU1hbmFnZXIuY3VycmVudFRpbWUucGFydE9mRGF5fSFgO1xuICAgICAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChuYXZDb250YWluZXIpO1xuICAgICAgICAgICAgbWFpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluQ29udGFpbmVyKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4geyBkb21DcmVhdGUgfTtcbiAgICB9KSgpO1xuICAgIHJldHVybiB7IHBhZ2VSZW5kZXIsIHRvZG9NYW5hZ2VyIH07XG59KSgpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgaG9tZVBhZ2UucGFnZVJlbmRlci5kb21DcmVhdGUoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9