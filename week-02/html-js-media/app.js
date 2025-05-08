console.log("hello world");

const image = document.querySelector("img");

image.addEventListener("load", function (event) {
  console.log("Image loaded!", event);
});

const audio = document.querySelector("audio");

audio.addEventListener("play", function (event) {
  console.log("Playing", event);
});

audio.addEventListener("pause", function (event) {
  console.log("Paused", event);
});

const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");
const stopButton = document.getElementById("stopButton");
const slider = document.querySelector("input");
audio.volume = 0.1;
//the buttons
playButton.addEventListener("click", function (event) {
  audio.play();
});
pauseButton.addEventListener("click", function (event) {
  audio.pause();
});
stopButton.addEventListener("click", function (event) {
  audio.pause();
  audio.currentTime = 0;
});
//slider function
slider.addEventListener("change", function (event) {
  audio.volume = event.target.value;
});
