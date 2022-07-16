window.onload = function () {

    var minutes = 00;
    var seconds = 00;
    var secondsElement = document.getElementById("seconds")
    var minutesElement = document.getElementById("minutes")
    var buttonStart = document.getElementById('button-start');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var Interval;

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        seconds = "00";
        minutes = "00";
        secondsElement.innerHTML = seconds;
        minutesElement.innerHTML = minutes;
    }

    function startTimer() {
        seconds++;
        if (seconds <= 9) {
            secondsElement.innerHTML = "0" + seconds;
        }
        if (seconds > 9) {
            secondsElement.innerHTML = seconds;
        }
        if (seconds > 99) {
            minutes++;
            minutesElement.innerHTML = "0" + minutes;
            seconds = 0;
            secondsElement.innerHTML = "0" + 0;
        }
        if (minutes > 9) {
            minutesElement.innerHTML = minutes;
        }
    }
}