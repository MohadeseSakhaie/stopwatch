//variable
let hour = 00;
let min = 00;
let sec = 00;

let displaySec = 00;
let displayMin = 00;
let displayHour = 00;

// var appendMin = document.getElementById("min");
// var appendSec = document.getElementById("sec");

// var start = document.getElementById("start");
// var stop = document.getElementById("stop");
// var reset = document.getElementById("reset");


//functions

const startTimer = () => {
    sec += 1;
    if (sec / 60 === 1) {
        sec = 00;
        min += 1;

        if (min / 60 === 1) {
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

window.setInterval(startTimer, 1000);


