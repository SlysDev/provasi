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

export default timeManager;
