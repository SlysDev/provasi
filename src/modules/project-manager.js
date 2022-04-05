import pageDom from "../modules/pagedom.js";
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
        pageDom.projectDom.projectListRender();
    };
    let openProject = function (project) {
        pageDom.clearPage();
        currentProject = project;
        pageDom.projectDom.loadProject(project);
    };
    let deleteProject = function (projectName) {
        delete projectList[projectList.indexOf(currentProject)];
        pageDom.clearPage();
        pageDom.projectMenuDom();
    };
    return {
        createProject,
        projectList,
        openProject,
        currentProject,
        deleteProject,
    };
})();

export default projectManager;
