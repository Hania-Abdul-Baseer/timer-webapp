let startingMinutes = 10;
let time = startingMinutes*60;

const timerElement = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer() {
    const minutes = Math.floor(time/60);
    let seconds = time%60;

    if(seconds < 10) seconds = '0'+seconds;

    timerElement.innerHTML = `${minutes}:${seconds}`;
    time--;
}