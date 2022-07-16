const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const reset = document.querySelector('#reset');
const secondElement = document.querySelector('#seconds')
const minuteElement = document.querySelector('#minutes')
let seconds = 00;
let minute = 00;
let Interval;

start.onclick = function(){
    clearInterval(Interval)
    Interval = setInterval(increaseTime, 1000)
}

stop.onclick = function(){
    clearInterval(Interval)
}

reset.onclick = function (){
    clearInterval(Interval)
    secondElement.innerHTML = `00`
    minuteElement.innerHTML = `00`
    seconds = 0;
    minute = 0;
}

function increaseTime() {
    seconds++
    if (seconds <= 9) {
        secondElement.innerHTML = "0" + seconds;
    }
    if (seconds > 9) {
        secondElement.innerHTML = seconds;
    }
    if (seconds > 59) {
        minute++;
        minuteElement.innerHTML = "0" + minute;
        seconds = 0;
        secondElement.innerHTML = "0" + 0;
    }
    if (minute > 9) {
        minuteElement.innerHTML = minute;
    }
}