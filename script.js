var isSetTimeoutRunning = false;
var interval;

function updateTimer() {
    if(isSetTimeoutRunning===true) return;

    const startingHours = document.getElementById('hours-input').value;
    const startingMinutes = document.getElementById('minutes-input').value;
    const startingSeconds = document.getElementById('seconds-input').value;

    if(startingHours<0 || startingMinutes<0 || startingSeconds<0){
        alert("Values must be equal to or greater than 0");
        return;
    }
    if(startingMinutes>59){
        alert("Minutes must be equal to or less than 59");
        return;
    }
    if(startingSeconds>59){
        alert("Seconds must be equal to or less than 59");
        return;
    }

    let time = startingHours*60*60 + startingMinutes*60 + Number(startingSeconds);
    isSetTimeoutRunning = true;

    interval = setInterval(function(){
        var timerElement = document.getElementById('timer');

        if(time<=-1) return;

        let hours = Math.floor(time/3600); 
        let temp = time - hours*60*60;
        let minutes = Math.floor(temp/60);
        let seconds = time - hours*60*60 - minutes*60;

        if(hours<10) hours = '0'+hours;
        if(minutes<10) minutes = '0'+minutes;
        if(seconds<10) seconds = '0'+seconds;
        
        timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;
        time--;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    isSetTimeoutRunning = false;
}

function resetTimer() {
    stopTimer();
    document.getElementById('timer').innerHTML = `00:00:00`;
}