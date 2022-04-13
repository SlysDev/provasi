import pageDom from "../modules/pagedom.js";
let projectManager = (function () {
    let currentProject = { title: "Test Project", todoList: [] };
    let projectList = [currentProject];
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
        if (projectList.length === 1) {
            delete projectList[0];
        } else {
            delete projectList[projectList.indexOf(currentProject)];
        }
        console.log(projectList);
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
