const player = document.querySelector('video');
const progressBar = document.querySelector('.progress');
const progress = document.querySelector('.progress__filled');
const play = document.querySelector('.player__button');
const volume = document.querySelector('input[name="volume"]');
const playbackRate = document.querySelector('input[name="playbackRate"]');
const back10 = document.querySelector('button[data-skip="-10"]');
const front25 = document.querySelector('button[data-skip="25"]');
const fullScreen = document.querySelector('.full_screen');
let progressPerc = 0 + "%";
let progressClicked = false;
let progressMovie;

function barProgress () {
  progressPerc = (player.currentTime / player.duration)*100 + "%";
  progress.setAttribute("style",`flex-basis:${progressPerc}`);
  return progressPerc;
}
function changeButton () {
  if(!player.paused) {
    play.setAttribute("style", "font-size: 8px");
    play.innerHTML = "&#9614"+"&#9614";
  }
  else {
    play.setAttribute("style", "font-size: 16px");
    play.innerHTML = "&#9658";
  }
}
function moveBar (e) {
  if(progressClicked) {
    progressMovie = (e.layerX/this.clientWidth);
    player.currentTime = player.duration * progressMovie;
  }
}
function togglePlay () {
  if(player.paused)
    player.play()
  else
    player.pause();
}
function changeVolume () {
  player.volume = this.value;
}
function changeRate () {
  player.playbackRate = this.value;
}
function rewind () {
  player.currentTime += parseInt(this.dataset.skip);
}
function full () {
  if (player.requestFullscreen) {
      player.requestFullscreen();
    } else if (player.mozRequestFullScreen) {
      player.mozRequestFullScreen();
    } else if (player.webkitRequestFullscreen) {
      player.webkitRequestFullscreen();
    }
}

player.addEventListener('timeupdate', barProgress);
player.addEventListener('play', changeButton);
player.addEventListener('pause', changeButton);
progressBar.addEventListener('mousemove', moveBar);
progressBar.addEventListener('mousedown', function (e) {
  progressClicked = true;
  progressMovie = (e.layerX/this.clientWidth);
  player.currentTime = player.duration * progressMovie;
});
progressBar.addEventListener('mouseup', function () {
  progressClicked = false;
});
play.addEventListener('click', togglePlay);
player.addEventListener('click', togglePlay);
volume.addEventListener('change', changeVolume);
playbackRate.addEventListener('change', changeRate);
back10.addEventListener('click', rewind);
front25.addEventListener('click', rewind);
fullScreen.addEventListener('click', full);
