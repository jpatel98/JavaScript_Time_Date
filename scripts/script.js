
setInterval(displayTime, 1);

function displayTime() {
    var time = new Date();
    var day = time.getDay();
    var date = time.getFullYear()+'/'+(time.getMonth()+1)+'/'+time.getDate();
    var hrs = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    var msecs = time.getMilliseconds();
    var em = "am";

    if (hrs < 10) {
        hrs = "0" + hrs;
    }

    if (mins < 10) {
        mins = "0" + mins;
    }

    if (secs < 10) {
        secs = "0" + secs;
    }
    if (hrs > 12) {
        hrs = hrs-12;
        em = "pm";
    }
    if (hrs == 0) {
        hrs = 12;
    }

    var clockEl = hrs + ":" + mins + ":" + secs + "," + msecs + "" + em;

    document.getElementById('dateClock').innerHTML = date;
    document.getElementById('clock').innerHTML = clockEl;
}