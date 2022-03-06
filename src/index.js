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
