function Hook(callback) {
    var elem = document.getElementById('gameContent');
    elem.handleEvent = function (e) {
        console.log("code = " + e.keyCode);
        ASLEvent(callback, e.keyCode.toString());
    };
    window.addEventListener("keydown", elem);
}