let startingHours = 2;
let startingMinutes = 30;
let startingSeconds = 3;
let time = startingHours*60*60 + startingMinutes*60 + startingSeconds;

const timerElement = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer() {
    let hours = Math.floor(time/3600); 

    let temp = time - hours*60*60;
    let minutes = Math.floor(temp/60);

    let seconds = time%60;

    if(hours<10) hours = '0' + hours;
    if(minutes<10) minutes = '0' + minutes;
    if(seconds<10) seconds = '0'+seconds;

    timerElement.innerHTML = `${hours}:${minutes}:${seconds}`;
    time--;
}