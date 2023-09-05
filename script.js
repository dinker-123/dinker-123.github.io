const timeRef = document.querySelector('.timer-display');
const startBtn = document.getElementById('start-timer');
const pauseBtn = document.getElementById('pause-timer');
const resetBtn = document.getElementById('reset-timer');

let seconds = 0;
let minutes = 0;
let hours = 0;
let int = null;

function formatNumber(num) {
  return num > 9 ? num : '0' + num;
}

function displayTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  timeRef.innerHTML = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
}

startBtn.addEventListener('click', () => {
  clearInterval(int);
  int = setInterval(displayTimer, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(int);
});

resetBtn.addEventListener('click', () => {
  clearInterval(int);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timeRef.innerHTML = '00:00:00';
});
