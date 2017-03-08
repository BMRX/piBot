var d = new Date();

var debugOldTime = {
    hr: d.getHours(),
    mn: d.getMinutes(),
    sc: d.getSeconds()
};

var debugCurTime = {};

var oldTime = d.getTime();
var curTime = {};
var timeHandler;

console.log("Old Time: \n" + oldTime);
getTime();

function getTime() {
    if (timeHandler) {
        clearTimeout(timeHandler);
        timeHandler = null;
    }
    var debugCurTime = {
        hr: new Date().getHours(),
        mn: new Date().getMinutes(),
        sc: new Date().getSeconds()
    };
    
    curTime = new Date().getTime();
    timeHandler = setTimeout(function () {
        getTime();
    }, 1000);
    if (curTime > (oldTime + 60000)) {
        oldTime = curTime;
        console.log("Time Started: " + "HR: " + debugOldTime.hr + " MN: " + debugOldTime.mn + " SC: " + debugOldTime.sc);
        console.log("Time Ended: " + "HR: " + debugCurTime.hr + " MN: " + debugCurTime.mn + " SC: " + debugCurTime.sc);
        console.log("saved!");
        clearTimeout(timeHandler);
    }
    console.log("Current Time: \n" + curTime);
    return curTime;
}