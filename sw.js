//variable for set time without functions
let hour = 00;
let min = 00;
let sec = 00;

let displaySec = 00;
let displayMin = 00;
let displayHour = 00;


// var for future function in buttons
 var startButton = document.getElementById("start");
 var stopButton = document.getElementById("stop");
 var resetButton = document.getElementById("reset");


//functions

const startTimer = () => {
    sec += 1;
    if (sec % 60 === 0) {
        sec = 00;
        min += 1;

        if (min % 60 === 0) {
            min = 00;
            hour++;
        }
    }
    if (sec < 10) {
        displaySec = "0" + sec.toString();
    }
    else {
        displaySec = sec;
    }
    if (min < 10) {
        displayMin = "0" + min.toString();
    }
    else {
        displayMin = min;
    }

    document.getElementById("timers").innerHTML = displayHour + ":" + displayMin + ":" + displaySec;
}

//buttons function

startButton.onclick = function () {
    interval = setInterval(startTimer,1000);
}
stopButton.onclick = function () {
    clearInterval(interval);
}
resetButton.onclick = function () {
    clearInterval(interval);
    hour = "00";
    min = "00";
    sec = "00";
    document.getElementById("timers").innerHTML = "00:00:00";
};

