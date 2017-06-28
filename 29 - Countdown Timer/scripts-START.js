const buttons = document.querySelectorAll('.timer__controls > button');
const customMinutes = document.querySelector('#custom');
const timerLeft = document.querySelector('.display__time-left');
const timeEnd = document.querySelector('.display__end-time');
let timeLeft, currentCount;

function setFrormButton(e) {
  clearInterval(currentCount);
  timeLeft = this.dataset.time ;
  displayTimeLeft(timeLeft);
  startCountdown();
}

function setFrormForm(e) {
  e.preventDefault();
  clearInterval(currentCount);
  timeLeft = this.querySelector('input').value * 60;
  displayTimeLeft(timeLeft);
  startCountdown();
  this.reset();
}

function startCountdown(e) {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  timeEnd.innerText = "Be back at " + backTime(hour, minute, second, timeLeft);
  currentCount = setInterval(countdown, 1000);
}

function backTime(hour, minute, second, left) {
  let h = Math.floor(left / 3600);
  let m = Math.floor((left - (h * 3600)) / 60);
  let s = left - (h * 3600) - (m * 60);
  let sBack = (second + s) % 60;
  let mBack = (minute + m + Math.floor((second + s) / 60)) % 60;
  let hBack = (hour + h + Math.floor((minute + m + Math.floor((second + s) / 60)) / 60)) % 24;
  if (mBack < 10) mBack = "0" + mBack;
  return hBack + ":" + mBack;
}

function countdown(e) {
  timeLeft -= 1;
  displayTimeLeft(timeLeft)
  if (timeLeft <= 0) {
    clearInterval(currentCount);
    timerLeft.innerText = "00:00";
    timeEnd.innerText = "I am back";
  }
}

function displayTimeLeft(timeLeft) {
  let minutesLeft = Math.floor(timeLeft / 60);
  let secondsLeft = timeLeft % 60;
  if (secondsLeft < 10) secondsLeft = "0" + secondsLeft;
  const displayedTime = minutesLeft + ":" + secondsLeft;
  timerLeft.innerText = displayedTime;
  document.title = displayedTime;
}


buttons.forEach(button => button.addEventListener('click', setFrormButton));
customMinutes.addEventListener('submit', setFrormForm)
