var d = new Date();

var oldTime = {
    hr: d.getHours(),
    mn: d.getMinutes(),
    sc: d.getSeconds()
};

var curTime = {};

console.log("Old Time: \n" + "HR: " + oldTime.hr + " MN: " + oldTime.mn + " SC: " + oldTime.sc);
getTime();

function getTime() {
    curTime = {
        hr: new Date().getHours(),
        mn: new Date().getMinutes(),
        sc: new Date().getSeconds()
    }
    setTimeout(function() { getTime(); }, 1000);
    if(curTime.mn > (oldTime.mn + 1) && curTime.sc >= 0){
        oldTime = curTime;
        console.log("Old Time: \n" + "HR: " + oldTime.hr + " MN: " + oldTime.mn + " SC: " + oldTime.sc);
        this.clearTimeout(getTime);
        console.log("saved!");
    }
    console.log("Current Time: \n" + "HR: " + curTime.hr + " MN: " + curTime.mn + " SC: " + curTime.sc);
    return curTime;
}